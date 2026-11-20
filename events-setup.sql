-- IDEA-EG Website project ONLY (qqdqkpdclkvppdilbjdg) — run in SQL Editor
create table if not exists public.reg_events(
 id uuid primary key default gen_random_uuid(),
 slug text unique not null,
 title_en text not null default '', title_ar text not null default '',
 description_en text default '', description_ar text default '',
 cover_image_url text default '',
 start_at timestamptz, end_at timestamptz,
 location_en text default '', location_ar text default '',
 map_url text default '',
 contact_email text default '',
 notify_admin boolean not null default false,
 admin_email text default '',
 registration_open boolean not null default true,
 registration_deadline timestamptz,
 show_countdown boolean not null default true,
 show_payment boolean not null default false,
 currency text default 'EGP',
 payment_note_en text default '', payment_note_ar text default '',
 published boolean not null default false,
 form_fields jsonb not null default '[]'::jsonb,
 created_at timestamptz default now());
create table if not exists public.reg_packages(
 id uuid primary key default gen_random_uuid(),
 event_id uuid not null references public.reg_events(id) on delete cascade,
 name_en text not null default '', name_ar text not null default '',
 desc_en text default '', desc_ar text default '',
 features_en text default '', features_ar text default '',
 price numeric not null default 0,
 capacity int,
 sort_order int default 0,
 active boolean not null default true,
 created_at timestamptz default now());
create table if not exists public.reg_registrations(
 id uuid primary key default gen_random_uuid(),
 event_id uuid not null references public.reg_events(id) on delete cascade,
 package_id uuid references public.reg_packages(id) on delete set null,
 code text unique not null,
 name text not null, email text not null, phone text default '',
 data jsonb not null default '{}'::jsonb,
 status text not null default 'confirmed' check (status in ('confirmed','waitlist','cancelled','attended')),
 payment_status text not null default 'unpaid' check (payment_status in ('unpaid','paid','free')),
 attended_at timestamptz,
 created_at timestamptz default now());
create index if not exists reg_reg_event_idx on public.reg_registrations(event_id);
alter table public.reg_events enable row level security;
alter table public.reg_packages enable row level security;
alter table public.reg_registrations enable row level security;
create policy "events public read" on public.reg_events for select using (published or auth.role()='authenticated');
create policy "events admin write" on public.reg_events for all to authenticated using (true) with check (true);
create policy "packages public read" on public.reg_packages for select using (active or auth.role()='authenticated');
create policy "packages admin write" on public.reg_packages for all to authenticated using (true) with check (true);
create policy "regs admin all" on public.reg_registrations for all to authenticated using (true) with check (true);

create or replace function public.register_for_event(p_event uuid,p_package uuid,p_name text,p_email text,p_phone text,p_data jsonb)
returns json language plpgsql security definer set search_path=public as $$
declare ev reg_events; pk reg_packages; taken int; st text; pay text; c text;
begin
 select * into ev from reg_events where id=p_event and published;
 if not found then return json_build_object('error','not_found'); end if;
 if not ev.registration_open or (ev.registration_deadline is not null and now()>ev.registration_deadline) then return json_build_object('error','closed'); end if;
 select * into pk from reg_packages where id=p_package and event_id=p_event and active;
 if not found then return json_build_object('error','no_package'); end if;
 if coalesce(trim(p_name),'')='' or coalesce(trim(p_email),'')='' then return json_build_object('error','invalid'); end if;
 if exists(select 1 from reg_registrations where event_id=p_event and status<>'cancelled' and (lower(email)=lower(trim(p_email)) or (coalesce(p_phone,'')<>'' and phone=p_phone))) then return json_build_object('error','duplicate'); end if;
 st:='confirmed';
 if pk.capacity is not null then
  select count(*) into taken from reg_registrations where package_id=pk.id and status in ('confirmed','attended');
  if taken>=pk.capacity then st:='waitlist'; end if;
 end if;
 pay:= case when pk.price>0 then 'unpaid' else 'free' end;
 c:=upper(substr(md5(random()::text||clock_timestamp()::text),1,8));
 insert into reg_registrations(event_id,package_id,code,name,email,phone,data,status,payment_status)
 values(p_event,p_package,c,trim(p_name),trim(p_email),coalesce(p_phone,''),coalesce(p_data,'{}'),st,pay);
 return json_build_object('code',c,'status',st);
end $$;

create or replace function public.get_registration(p_code text)
returns json language sql security definer set search_path=public as $$
 select json_build_object('code',r.code,'name',r.name,'status',r.status,'payment_status',r.payment_status)
 from reg_registrations r where r.code=upper(p_code) limit 1 $$;
grant execute on function public.register_for_event(uuid,uuid,text,text,text,jsonb) to anon,authenticated;
grant execute on function public.get_registration(text) to anon,authenticated;
