/* Events & Registration admin — IDEA-EG */
(function(){
var sb=window.getSupabaseClient();
var MED_TEMPLATE=[{"key": "title", "label_en": "Title", "label_ar": "اللقب", "type": "select", "required": false, "options_en": "Dr.,Prof.,Mr.,Ms.,Mrs.", "options_ar": "دكتور,أستاذ دكتور,السيد,الآنسة,السيدة"}, {"key": "gender", "label_en": "Gender", "label_ar": "النوع", "type": "select", "required": false, "options_en": "Male,Female", "options_ar": "ذكر,أنثى"}, {"key": "phone", "label_en": "Mobile Number", "label_ar": "رقم الموبايل", "type": "tel", "required": true, "options_en": "", "options_ar": ""}, {"key": "country", "label_en": "Country", "label_ar": "الدولة", "type": "select", "required": true, "options_en": "Afghanistan,Albania,Algeria,Argentina,Armenia,Australia,Austria,Azerbaijan,Bahrain,Bangladesh,Belarus,Belgium,Bolivia,Bosnia and Herzegovina,Brazil,Bulgaria,Cambodia,Cameroon,Canada,Chile,China,Colombia,Congo,Croatia,Cuba,Cyprus,Czech Republic,Denmark,Ecuador,Egypt,El Salvador,Estonia,Ethiopia,Finland,France,Georgia,Germany,Ghana,Greece,Guatemala,Honduras,Hungary,India,Indonesia,Iran,Iraq,Ireland,Israel,Italy,Jamaica,Japan,Jordan,Kazakhstan,Kenya,Kosovo,Kuwait,Kyrgyzstan,Latvia,Lebanon,Libya,Lithuania,Luxembourg,Malaysia,Malta,Mexico,Moldova,Mongolia,Montenegro,Morocco,Myanmar,Nepal,Netherlands,New Zealand,Nicaragua,Nigeria,North Macedonia,Norway,Oman,Pakistan,Palestine,Panama,Paraguay,Peru,Philippines,Poland,Portugal,Qatar,Romania,Russia,Saudi Arabia,Senegal,Serbia,Sierra Leone,Singapore,Slovakia,Slovenia,Somalia,South Africa,South Korea,Spain,Sri Lanka,Sudan,Sweden,Switzerland,Syria,Taiwan,Tajikistan,Tanzania,Thailand,Tunisia,Turkey,Turkmenistan,Uganda,Ukraine,United Arab Emirates,United Kingdom,United States,Uruguay,Uzbekistan,Venezuela,Vietnam,Yemen,Zimbabwe", "options_ar": "أفغانستان,ألبانيا,الجزائر,الأرجنتين,أرمينيا,أستراليا,النمسا,أذربيجان,البحرين,بنغلاديش,بيلاروسيا,بلجيكا,بوليفيا,البوسنة والهرسك,البرازيل,بلغاريا,كمبوديا,الكاميرون,كندا,تشيلي,الصين,كولومبيا,الكونغو,كرواتيا,كوبا,قبرص,التشيك,الدنمارك,الإكوادور,مصر,السلفادور,إستونيا,إثيوبيا,فنلندا,فرنسا,جورجيا,ألمانيا,غانا,اليونان,غواتيمالا,هندوراس,المجر,الهند,إندونيسيا,إيران,العراق,أيرلندا,إسرائيل,إيطاليا,جامايكا,اليابان,الأردن,كازاخستان,كينيا,كوسوفو,الكويت,قيرغيزستان,لاتفيا,لبنان,ليبيا,ليتوانيا,لوكسمبورغ,ماليزيا,مالطا,المكسيك,مولدوفا,منغوليا,الجبل الأسود,المغرب,ميانمار,نيبال,هولندا,نيوزيلندا,نيكاراغوا,نيجيريا,مقدونيا الشمالية,النرويج,عُمان,باكستان,فلسطين,بنما,باراغواي,بيرو,الفلبين,بولندا,البرتغال,قطر,رومانيا,روسيا,السعودية,السنغال,صربيا,سيراليون,سنغافورة,سلوفاكيا,سلوفينيا,الصومال,جنوب أفريقيا,كوريا الجنوبية,إسبانيا,سريلانكا,السودان,السويد,سويسرا,سوريا,تايوان,طاجيكستان,تنزانيا,تايلاند,تونس,تركيا,تركمانستان,أوغندا,أوكرانيا,الإمارات,المملكة المتحدة,الولايات المتحدة,أوروغواي,أوزبكستان,فنزويلا,فيتنام,اليمن,زيمبابوي"}, {"key": "dob", "label_en": "Date of Birth", "label_ar": "تاريخ الميلاد", "type": "date", "required": false, "options_en": "", "options_ar": ""}, {"key": "city", "label_en": "City", "label_ar": "المدينة", "type": "text", "required": false, "options_en": "", "options_ar": ""}, {"key": "address", "label_en": "Address", "label_ar": "العنوان", "type": "text", "required": false, "options_en": "", "options_ar": ""}, {"key": "organization", "label_en": "Organization / Hospital", "label_ar": "الجهة / المستشفى", "type": "text", "required": true, "options_en": "", "options_ar": ""}, {"key": "specialty", "label_en": "Medical Specialty", "label_ar": "التخصص", "type": "select", "required": false, "options_en": "Cardiology,Chest / Pulmonology,Internal Medicine,Surgery,Orthopedics,Neurology,Psychiatry,Radiology,Oncology,Obstetrics & Gynecology,Pediatrics,Emergency Medicine,Anesthesiology,Dermatology,Ophthalmology,ENT / Otolaryngology,Family Medicine / GP,Dentistry,Nursing,Pharmacy,Other", "options_ar": "القلب,الصدر,الباطنة,الجراحة,العظام,المخ والأعصاب,الطب النفسي,الأشعة,الأورام,النساء والتوليد,الأطفال,الطوارئ,التخدير,الجلدية,العيون,الأنف والأذن والحنجرة,طب الأسرة / ممارس عام,طب الأسنان,التمريض,الصيدلة,أخرى"}, {"key": "subspecialty", "label_en": "Subspecialty", "label_ar": "التخصص الدقيق", "type": "text", "required": false, "options_en": "", "options_ar": ""}, {"key": "how_know", "label_en": "How did you know about the conference?", "label_ar": "عرفت عن المؤتمر منين؟", "type": "select", "required": false, "options_en": "Email,Facebook,A friend,Flyers or posters,SMS,News paper,From a medical representative", "options_ar": "إيميل,فيسبوك,صديق,فلايرز أو بوسترات,رسالة SMS,جريدة,مندوب طبي"}, {"key": "friend_name", "label_en": "Recommend to a friend — Friend name", "label_ar": "ترشيح صديق — اسم الصديق", "type": "text", "required": false, "options_en": "", "options_ar": ""}, {"key": "friend_email", "label_en": "Friend email", "label_ar": "إيميل الصديق", "type": "email", "required": false, "options_en": "", "options_ar": ""}, {"key": "friend_mobile", "label_en": "Friend mobile", "label_ar": "موبايل الصديق", "type": "tel", "required": false, "options_en": "", "options_ar": ""}];
var EVS=[],EV=null,PKS=[],REGS=[],scanner=null;
var $=function(i){return document.getElementById(i);};
function h(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
var IN='padding:8px;border:1px solid var(--line);border-radius:5px;font:inherit';
function toast(t,bad){
  var d=document.getElementById('rg-toast');
  if(!d){d=document.createElement('div');d.id='rg-toast';d.style.cssText='position:fixed;left:50%;bottom:28px;transform:translateX(-50%);padding:12px 22px;border-radius:10px;color:#fff;font-weight:600;box-shadow:0 8px 24px rgba(0,0,0,.25);z-index:9999;transition:opacity .3s';document.body.appendChild(d);}
  d.style.background=bad?'#C0392B':'#1a8f55';d.textContent=t;d.style.opacity='1';
  clearTimeout(d._t);d._t=setTimeout(function(){d.style.opacity='0';},3200);
}
function msg(t,bad){toast(t,bad);var e=$('rg-msg');e.style.color=bad?'var(--orange-dark)':'#2FBE7A';e.textContent=t;if(!bad)setTimeout(function(){e.textContent='';},3500);}
function toLocal(d){if(!d)return '';var x=new Date(d);x.setMinutes(x.getMinutes()-x.getTimezoneOffset());return x.toISOString().slice(0,16);}
function fromLocal(v){return v?new Date(v).toISOString():null;}

function label(e){return (e.title_en||e.title_ar||'(no title)')+' — '+e.slug+(e.published?' ● Published':' ○ Draft');}
window.loadRegAdmin=async function(){
  var r=await sb.from('reg_events').select('*').order('created_at',{ascending:false});
  if(r.error){$('rg-body').innerHTML='<p style="color:var(--orange-dark)">'+h(r.error.message)+' — شغّل ملف events-setup.sql في Supabase أولاً / Run events-setup.sql in Supabase first.</p>';return;}
  EVS=r.data||[];
  var keep=(EV&&EV.id)||(function(){try{return localStorage.getItem('rg_last_event');}catch(e){return null;}})();
  $('rg-select').innerHTML=EVS.map(function(e){return '<option value="'+e.id+'">'+h(label(e))+'</option>';}).join('');
  if(EVS.length){$('rg-select').value=(EVS.some(function(e){return e.id===keep;})?keep:EVS[0].id);pick();}
  else{EV=null;$('rg-main').style.display='none';}
};
async function pick(){
  EV=EVS.filter(function(e){return e.id===$('rg-select').value;})[0];
  if(!EV)return;
  try{localStorage.setItem('rg_last_event',EV.id);}catch(e){}
  $('rg-main').style.display='block';
  var f=['slug','title_en','title_ar','description_en','description_ar','cover_image_url','location_en','location_ar','map_url','contact_email','admin_email','currency','payment_note_en','payment_note_ar'];
  f.forEach(function(k){$('rg-'+k).value=EV[k]||'';});
  $('rg-start_at').value=toLocal(EV.start_at);$('rg-end_at').value=toLocal(EV.end_at);$('rg-registration_deadline').value=toLocal(EV.registration_deadline);
  $('rg-form_lang').value=EV.form_lang||'auto';$('rg-badge_show_qr').checked=EV.badge_show_qr!==false;$('rg-cert_scope_all').checked=EV.cert_scope==='all';$('rg-cert_online').checked=!!EV.cert_online;$('rg-cert_search_phone').checked=EV.cert_search_phone!==false;$('rg-cert_search_code').checked=EV.cert_search_code!==false;$('rg-cert_search_email').checked=!!EV.cert_search_email;$('rg-cert-link').value=location.origin+'/event.html?e='+EV.slug+'&cert=1';
  ['badge_size','badge_bg_url','badge_w_mm','badge_h_mm','cert_template_url','cert_orientation','cert_name_x','cert_name_y','cert_font','cert_font_mm','cert_color','badge_name_x','badge_name_y','badge_name_mm','badge_qr_x','badge_qr_y','badge_qr_mm'].forEach(function(k){var el=$('rg-'+k);if(el&&EV[k]!=null)el.value=EV[k];});
  rgBadgeSizeUI();rgCertPreview();rgBadgePreview();fillReception();
  ['published','registration_open','show_countdown','show_payment','notify_admin'].forEach(function(k){$('rg-'+k).checked=!!EV[k];});
  $('rg-link').value=location.origin+'/event.html?e='+EV.slug;
  renderFields();await loadPkgs();fillReception();await loadRegs();
  if($('rg-frame').dataset.slug!==EV.slug)rgPreview();
}
var pvT=null;
window.rgPreviewSoon=function(){clearTimeout(pvT);pvT=setTimeout(function(){rgPreview();},2500);};
window.rgPreview=function(w){
  if(!EV)return;var f=$('rg-frame');
  if(w)f.style.maxWidth=w==='m'?'390px':'100%';
  f.dataset.slug=EV.slug;
  f.src='event.html?e='+encodeURIComponent(EV.slug)+'&preview=1&t='+Date.now();
};
window.rgOpenPreview=function(){window.open('event.html?e='+encodeURIComponent(EV.slug)+'&preview=1','_blank');};
window.rgNew=async function(){
  var slug='event-'+Date.now().toString(36);
  var fields=MED_TEMPLATE.slice();
  var r=await sb.from('reg_events').insert({slug:slug,title_en:'New event',form_fields:fields}).select().single();
  if(r.error)return msg(r.error.message,true);
  EV=r.data;await loadRegAdmin();$('rg-select').value=r.data.id;pick();
};
window.rgPick=pick;
window.rgSave=async function(auto){
  if(!EV)return;var o={};
  ['slug','title_en','title_ar','description_en','description_ar','cover_image_url','location_en','location_ar','map_url','contact_email','admin_email','currency','payment_note_en','payment_note_ar'].forEach(function(k){o[k]=$('rg-'+k).value.trim();});
  o.slug=o.slug.toLowerCase().replace(/[^a-z0-9-]/g,'-');
  o.form_lang=$('rg-form_lang').value;o.badge_show_qr=$('rg-badge_show_qr').checked;o.cert_scope=$('rg-cert_scope_all').checked?'all':'attended';o.cert_online=$('rg-cert_online').checked;o.cert_search_phone=$('rg-cert_search_phone').checked;o.cert_search_code=$('rg-cert_search_code').checked;o.cert_search_email=$('rg-cert_search_email').checked;
  ['badge_size','badge_bg_url','cert_template_url','cert_orientation','cert_font','cert_color'].forEach(function(k){o[k]=$('rg-'+k).value;});
  ['badge_w_mm','badge_h_mm','cert_name_x','cert_name_y','cert_font_mm','badge_name_x','badge_name_y','badge_name_mm','badge_qr_x','badge_qr_y','badge_qr_mm'].forEach(function(k){o[k]=Number($('rg-'+k).value)||0;});
  var pr=BADGE_PRESETS[o.badge_size];if(pr){o.badge_w_mm=pr[0];o.badge_h_mm=pr[1];$('rg-badge_w_mm').value=pr[0];$('rg-badge_h_mm').value=pr[1];}
  o.start_at=fromLocal($('rg-start_at').value);o.end_at=fromLocal($('rg-end_at').value);o.registration_deadline=fromLocal($('rg-registration_deadline').value);
  ['published','registration_open','show_countdown','show_payment','notify_admin'].forEach(function(k){o[k]=$('rg-'+k).checked;});
  o.form_fields=readFields();
  var r=await sb.from('reg_events').update(o).eq('id',EV.id);
  if(r.error)return msg(r.error.message,true);
  if(auto===true){Object.assign(EV,o);var op=$('rg-select').selectedOptions[0];if(op)op.textContent=label(o);$('rg-link').value=location.origin+'/event.html?e='+o.slug;msg('تم الحفظ تلقائياً');rgPreviewSoon();return;}
  msg('تم الحفظ — Saved');await loadRegAdmin();
};
window.rgDelete=async function(){
  if(!EV)return msg('Select an event first',true);
  var t=prompt('This will permanently delete "'+label(EV)+'" with ALL its packages and registrations. This cannot be undone.\n\nType  idea  to confirm - اكتب idea للتأكيد');
  if(t===null)return;if(t.trim().toLowerCase()!=='idea')return msg('Not deleted - confirmation word did not match',true);
  var r=await sb.from('reg_events').delete().eq('id',EV.id);
  if(r.error)return msg(r.error.message,true);
  try{localStorage.removeItem('rg_last_event');}catch(e){}
  EV=null;msg('Event deleted');loadRegAdmin();
};
window.rgUpload=async function(inp){
  var file=inp.files[0];if(!file)return;
  var name=Date.now()+'-'+file.name.replace(/[^a-zA-Z0-9._-]/g,'_');
  var r=await sb.storage.from('website-media').upload(name,file);
  if(r.error)return msg(r.error.message,true);
  $('rg-cover_image_url').value=sb.storage.from('website-media').getPublicUrl(name).data.publicUrl;
  msg('Uploaded');rgSave(true);
};
window.rgCopy=function(){$('rg-link').select();document.execCommand('copy');msg('Link copied');};

/* ---- form builder ---- */
var TYPES=['text','email','tel','number','date','textarea','select','checkbox'];
function renderFields(){
  var ff=EV.form_fields||[];
  $('rg-fields').innerHTML=ff.map(function(x,i){return '<div class="rg-ff" style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding:8px;border:1px solid var(--line);border-radius:8px;margin-bottom:8px">'+
   '<input data-k="key" placeholder="key e.g. phone" value="'+h(x.key)+'" dir="ltr" style="width:110px;'+IN+'">'+
   '<input data-k="label_en" placeholder="Label EN" value="'+h(x.label_en)+'" style="flex:1;min-width:120px;'+IN+'">'+
   '<input data-k="label_ar" placeholder="الاسم بالعربي" value="'+h(x.label_ar)+'" dir="rtl" style="flex:1;min-width:120px;'+IN+'">'+
   '<select data-k="type" style="'+IN+'">'+TYPES.map(function(t){return '<option'+(t===x.type?' selected':'')+'>'+t+'</option>';}).join('')+'</select>'+
   '<label style="font-size:.82rem"><input type="checkbox" data-k="required"'+(x.required?' checked':'')+'> Required</label>'+
   '<select data-k="opt_lang" title="Dropdown language" style="'+IN+'">'+[['auto','Dropdown: follow page language'],['both','Dropdown: Arabic + English'],['ar','Dropdown: Arabic only'],['en','Dropdown: English only']].map(function(o){return '<option value="'+o[0]+'"'+((x.opt_lang||'auto')===o[0]?' selected':'')+'>'+o[1]+'</option>';}).join('')+'</select>'+
   '<input data-k="options_en" placeholder="Options EN (a, b, c) — select only" value="'+h(x.options_en)+'" style="flex:1;min-width:140px;'+IN+'">'+
   '<input data-k="options_ar" placeholder="الخيارات (أ، ب، ج) — لقائمة الاختيار" value="'+h(x.options_ar)+'" dir="rtl" style="flex:1;min-width:140px;'+IN+'">'+
   '<button class="mini-btn" onclick="rgMove('+i+',-1)">Up</button><button class="mini-btn" onclick="rgMove('+i+',1)">Down</button><button class="mini-btn" onclick="rgDelField('+i+')">Delete</button></div>';}).join('')||'<p style="color:var(--ink-soft);font-size:.88rem">No extra fields. Name + email are always included.</p>';
}
function readFields(){
  return Array.prototype.map.call(document.querySelectorAll('.rg-ff'),function(row){
    var o={};row.querySelectorAll('[data-k]').forEach(function(el){o[el.dataset.k]=el.type==='checkbox'?el.checked:el.value.trim();});
    o.key=(o.key||'').replace(/[^a-zA-Z0-9_]/g,'_');return o;}).filter(function(o){return o.key;});
}
window.rgAddField=function(){EV.form_fields=readFields();EV.form_fields.push({key:'field'+(EV.form_fields.length+1),label_en:'',label_ar:'',type:'text',required:false});renderFields();};
window.rgAddTemplate=function(){var cur=readFields(),have={};cur.forEach(function(f){have[f.key]=1;});EV.form_fields=cur.concat(MED_TEMPLATE.filter(function(f){return !have[f.key];}));renderFields();msg('Added — review then it auto-saves');rgSave(true);};
window.rgDelField=function(i){EV.form_fields=readFields();EV.form_fields.splice(i,1);renderFields();};
window.rgMove=function(i,d){var a=readFields(),j=i+d;if(j<0||j>=a.length)return;var t=a[i];a[i]=a[j];a[j]=t;EV.form_fields=a;renderFields();};

/* ---- packages ---- */
async function loadPkgs(){
  var r=await sb.from('reg_packages').select('*').eq('event_id',EV.id).order('sort_order');
  PKS=r.data||[];
  $('rg-pkgs').innerHTML=PKS.map(function(p){return '<div class="rg-pk" data-id="'+p.id+'" style="display:flex;flex-wrap:wrap;gap:6px;padding:10px;border:1px solid var(--line);border-radius:8px;margin-bottom:8px">'+
   '<input data-k="name_en" placeholder="Name EN" value="'+h(p.name_en)+'" style="flex:1;min-width:130px;'+IN+'">'+
   '<input data-k="name_ar" placeholder="الاسم" dir="rtl" value="'+h(p.name_ar)+'" style="flex:1;min-width:130px;'+IN+'">'+
   '<input data-k="price" type="number" min="0" placeholder="Price" value="'+p.price+'" style="width:90px;'+IN+'">'+
   '<input data-k="capacity" type="number" min="0" placeholder="Seats (empty=∞)" value="'+(p.capacity==null?'':p.capacity)+'" style="width:120px;'+IN+'">'+
   '<input data-k="sort_order" type="number" value="'+(p.sort_order||0)+'" title="Order" style="width:64px;'+IN+'">'+
   '<label style="font-size:.82rem"><input type="checkbox" data-k="active"'+(p.active?' checked':'')+'> Active</label>'+
   '<input data-k="desc_en" placeholder="Short description EN" value="'+h(p.desc_en)+'" style="flex:1 1 45%;'+IN+'">'+
   '<input data-k="desc_ar" placeholder="وصف مختصر" dir="rtl" value="'+h(p.desc_ar)+'" style="flex:1 1 45%;'+IN+'">'+
   '<textarea data-k="features_en" rows="3" placeholder="Features EN — one per line" style="flex:1 1 45%;'+IN+'">'+h(p.features_en)+'</textarea>'+
   '<textarea data-k="features_ar" rows="3" dir="rtl" placeholder="المميزات — كل ميزة في سطر" style="flex:1 1 45%;'+IN+'">'+h(p.features_ar)+'</textarea>'+
   '<button class="mini-btn primary" onclick="rgSavePkg(\''+p.id+'\')">Save</button><button class="mini-btn" onclick="rgDelPkg(\''+p.id+'\')">Delete</button></div>';}).join('')||'<p style="color:var(--ink-soft);font-size:.88rem">No packages yet.</p>';
  $('rg-f-pkg').innerHTML='<option value="">All packages</option>'+PKS.map(function(p){return '<option value="'+p.id+'">'+h(p.name_en||p.name_ar)+'</option>';}).join('');
}
window.rgAddPkg=async function(){
  var r=await sb.from('reg_packages').insert({event_id:EV.id,name_en:'New package',sort_order:PKS.length}).select();
  if(r.error)return msg(r.error.message,true);await loadPkgs();rgPreview();
};
window.rgSavePkg=async function(id,auto){
  var row=document.querySelector('.rg-pk[data-id="'+id+'"]'),o={};
  row.querySelectorAll('[data-k]').forEach(function(el){o[el.dataset.k]=el.type==='checkbox'?el.checked:el.value;});
  o.price=Number(o.price)||0;o.capacity=o.capacity===''?null:Number(o.capacity);o.sort_order=Number(o.sort_order)||0;
  var r=await sb.from('reg_packages').update(o).eq('id',id);
  msg(r.error?r.error.message:'تم حفظ الباقة',!!r.error);if(auto)rgPreviewSoon();else rgPreview();
};
window.rgDelPkg=async function(id){if(!confirm('Delete package?'))return;await sb.from('reg_packages').delete().eq('id',id);await loadPkgs();rgPreview();};

/* ---- registrations ---- */
async function loadRegs(){
  var r=await sb.from('reg_registrations').select('*').eq('event_id',EV.id).order('created_at',{ascending:false});
  REGS=r.data||[];renderRegs();
}
function filtered(){
  var s=$('rg-f-status').value,p=$('rg-f-pkg').value,q=$('rg-f-q').value.toLowerCase();
  return REGS.filter(function(x){return (!s||x.status===s)&&(!p||x.package_id===p)&&(!q||(x.name+' '+x.email+' '+x.phone+' '+x.code).toLowerCase().indexOf(q)>-1);});
}
function pname(id){var p=PKS.filter(function(x){return x.id===id;})[0];return p?(p.name_en||p.name_ar):'';}
function renderRegs(){
  var list=filtered();
  var c={confirmed:0,waitlist:0,cancelled:0,attended:0,walkin:0,paid:0};REGS.forEach(function(x){c[x.status]++;if(x.source==='walkin')c.walkin++;if(x.payment_status==='paid')c.paid++;});
  $('rg-stats').textContent='Total '+REGS.length+' · Confirmed '+c.confirmed+' · Attended '+c.attended+' · Waitlist '+c.waitlist+' · Cancelled '+c.cancelled+' · Walk-in '+c.walkin+' · Paid '+c.paid;
  var tot=c.confirmed+c.attended,pc=tot?Math.round(c.attended*100/tot):0;
  $('rg-counter').innerHTML='<div style="display:flex;flex-wrap:wrap;gap:6px 18px;align-items:baseline"><b style="font-size:1.15rem">Attended '+c.attended+' of '+tot+' ('+pc+'%) - حضر '+c.attended+' من '+tot+'</b><span style="color:#C0392B">Not yet - لسه ما حضروش: '+c.confirmed+'</span><span>Walk-in - تسجيل في المكان: '+c.walkin+'</span></div><div style="height:8px;background:#eee;border-radius:4px;margin-top:6px;overflow:hidden"><div style="height:100%;width:'+pc+'%;background:#22C55E;transition:width .4s"></div></div>';
  var ST=['confirmed','waitlist','cancelled','attended'],PY=['unpaid','paid','free'],PM=['','cash','card','instapay','other'],TT=['','Dr.','Prof.','Mr.','Ms.','Mrs.'];
  function sel(arr,val,fn){return '<select onchange="'+fn+'">'+arr.map(function(s){return '<option value="'+s+'"'+(s===val?' selected':'')+'>'+(s||'—')+'</option>';}).join('')+'</select>';}
  $('rg-tbody').innerHTML=list.map(function(x){var id="'"+x.id+"'";return '<tr><td dir="ltr"><b>'+h(x.code)+'</b></td>'+
   '<td style="min-width:200px"><div style="display:flex;gap:4px">'+sel(TT,x.title||'','rgSet('+id+',\'title\',this.value)')+'<input value="'+h(x.name)+'" dir="ltr" onchange="rgSet('+id+',\'name\',this.value)" style="padding:5px;border:1px solid var(--line);border-radius:5px;min-width:130px"></div></td>'+
   '<td dir="ltr" style="font-size:.8rem">'+h(x.email)+'<br>'+h(x.phone)+'</td><td>'+h(pname(x.package_id))+'</td>'+
   '<td><div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;font-size:.78rem;font-weight:600;color:'+(x.status==='attended'?'#1a8f55':'#C0392B')+'"><span style="width:11px;height:11px;border-radius:50%;flex:none;background:'+(x.status==='attended'?'#22C55E;box-shadow:0 0 6px 2px rgba(34,197,94,.7)':'#E5382B;box-shadow:0 0 5px 1px rgba(229,56,43,.5)')+'"></span>'+(x.status==='attended'?'Attended - حضر':'Not attended - لم يحضر')+'</div>'+sel(ST,x.status,'rgSet('+id+',\'status\',this.value)')+'</td>'+
   '<td>'+sel(PY,x.payment_status,'rgSet('+id+',\'payment_status\',this.value)')+'<br>'+sel(PM,x.payment_method||'','rgSet('+id+',\'payment_method\',this.value)')+'</td>'+
   '<td style="font-size:.78rem">'+(x.source==='walkin'?'walk-in':'online')+'<br>'+new Date(x.created_at).toLocaleString()+'</td>'+
   '<td style="min-width:150px"><input readonly dir="ltr" value="'+h(location.origin+'/event.html?e='+EV.slug+'&ticket='+x.code)+'" onclick="this.select()" style="width:130px;padding:4px;font-size:.72rem;border:1px solid var(--line);border-radius:4px"> <button class="mini-btn" onclick="rgCopyLink(\''+x.code+'\')">Copy</button></td>'+
   '<td style="white-space:nowrap"><button class="mini-btn pm-print" title="Name tag" onclick="rgBadgeOne('+id+')">Tag</button><button class="mini-btn pm-print" title="Certificate" onclick="rgCertOne('+id+')">Cert</button><button class="mini-btn pm-edit" onclick="rgDelReg('+id+')">Delete</button></td></tr>';}).join('')||'<tr><td colspan="9" style="color:var(--ink-soft)">No registrations</td></tr>';
}
window.rgRender=renderRegs;
window.rgSet=async function(id,k,v){var o={};o[k]=v;if(k==='status')o.attended_at=v==='attended'?new Date().toISOString():null;var r=await sb.from('reg_registrations').update(o).eq('id',id);if(r.error)msg(r.error.message,true);else msg('تم الحفظ');loadRegs();};
window.rgDelReg=async function(id){if(!confirm('Delete registration?'))return;await sb.from('reg_registrations').delete().eq('id',id);loadRegs();};

/* ---- export ---- */
function rows(){
  var ff=EV.form_fields||[];
  return filtered().map(function(x){var o={Code:x.code,Title:x.title||'',Name:x.name,Email:x.email,Package:pname(x.package_id),Status:x.status,Payment:x.payment_status,Method:x.payment_method||'',Source:x.source||'online',Registered:new Date(x.created_at).toLocaleString()};
    ff.forEach(function(f){var v=(x.data||{})[f.key];o[f.label_en||f.label_ar||f.key]=v===true?'Yes':(v===false?'':(v==null?'':v));});return o;});
}
window.rgXlsx=function(){
  var ws=XLSX.utils.json_to_sheet(rows());ws['!cols']=[{wch:10},{wch:26},{wch:28}];
  var wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Registrations');
  XLSX.writeFile(wb,(EV.slug||'event')+'-registrations.xlsx');
};
function printWin(html){
  var w=window.open('','_blank');if(!w){alert('Allow pop-ups to export PDF');return;}
  w.document.write('<!doctype html><html dir="auto"><meta charset="utf-8"><title>'+h(EV.slug)+'</title><style>body{font-family:Arial,Tahoma,sans-serif;margin:24px;color:#111}table{border-collapse:collapse;width:100%;font-size:12px}th,td{border:1px solid #999;padding:5px 7px;text-align:start}th{background:#eee}.b{display:inline-block;width:46%;margin:1.5%;border:2px solid #111;border-radius:10px;padding:14px;text-align:center;page-break-inside:avoid;vertical-align:top}.b h3{margin:0 0 6px;font-size:14px}.b .n{font-size:20px;font-weight:700;margin:8px 0}.b .c{font:700 18px monospace;letter-spacing:2px}@media print{.np{display:none}}</style><body><button class="np" onclick="print()">Print / Save as PDF</button>'+html+'</body></html>');
  w.document.close();
}
window.rgPdf=function(mode){
  var list=filtered();
  var title='<h2>'+h(EV.title_en||EV.title_ar)+'</h2>';
  var listHtml=title+'<table><tr><th>#</th><th>Code</th><th>Name</th><th>Email</th><th>Phone</th><th>Package</th><th>Status</th><th>Payment</th><th>Source</th></tr>'+list.map(function(x,i){return '<tr><td>'+(i+1)+'</td><td>'+h(x.code)+'</td><td>'+h((x.title?x.title+' ':'')+x.name)+'</td><td>'+h(x.email)+'</td><td>'+h(x.phone)+'</td><td>'+h(pname(x.package_id))+'</td><td>'+h(x.status)+'</td><td>'+h(x.payment_status)+(x.payment_method?' ('+h(x.payment_method)+')':'')+'</td><td>'+h(x.source||'online')+'</td></tr>';}).join('')+'</table>';
  if(mode==='list')return printWin(listHtml);
  if(mode==='badges')return printBadges(list);
  printWin(listHtml);setTimeout(function(){printBadges(list);},400);
};
var BADGE_PRESETS={'90x120':[90,120],'90x130':[90,130],'100x140':[100,140],'a6':[105,148],'a5':[148,210],'a7':[74,105],'card':[85,55],'100x100':[100,100],'80x50':[80,50]};
window.rgBadgeSizeUI=function(){var c=$('rg-badge_size').value==='custom';$('rg-badge-custom').style.display=c?'flex':'none';var pr=BADGE_PRESETS[$('rg-badge_size').value];if(pr){$('rg-badge_w_mm').value=pr[0];$('rg-badge_h_mm').value=pr[1];}if(EV)rgBadgePreview();};
function fitMm(text,W,mm){return Math.max(3,Math.min(mm,(W*0.9)/Math.max(6,String(text).length*0.55)));}
function L2(){var g=function(k,d){var v=Number(EV[k]);return isNaN(v)||EV[k]==null?d:v;};return {nx:g('badge_name_x',50),ny:g('badge_name_y',38),nm:g('badge_name_mm',9),qx:g('badge_qr_x',50),qy:g('badge_qr_y',74),qm:g('badge_qr_mm',40)};}
function badgeBlock(x,W,H){
  var l=L2(),nm=(x.title?x.title+' ':'')+x.name;
  return '<div class="bg" style="width:'+W+'mm;height:'+H+'mm">'+(EV.badge_bg_url?'<img src="'+h(EV.badge_bg_url)+'" alt="" style="position:absolute;inset:0;width:100%;height:100%">':'')+
   '<div style="position:absolute;top:3mm;left:0;right:0;font-size:'+(W*0.04)+'mm;color:#555">'+h(EV.title_en||EV.title_ar)+'</div>'+
   '<div style="position:absolute;left:'+l.nx+'%;top:'+l.ny+'%;transform:translate(-50%,-50%);width:94%;font-size:'+fitMm(nm,W,l.nm)+'mm;font-weight:700;line-height:1.15">'+h(nm)+'</div>'+
   (EV.badge_show_qr===false?'':'<div style="position:absolute;left:'+l.qx+'%;top:'+l.qy+'%;transform:translate(-50%,-50%);text-align:center"><img style="width:'+l.qm+'mm;height:'+l.qm+'mm;display:block" alt="" src="'+qrDataUrl(x.code,300)+'"><div style="font:700 '+(W*0.035)+'mm monospace;letter-spacing:.1em">'+h(x.code)+'</div></div>')+'</div>';
}
function printBadges(list){
  var W=Number(EV.badge_w_mm)||105,H=Number(EV.badge_h_mm)||148;
  var w=window.open('','_blank');if(!w){alert('Allow pop-ups');return;}
  w.document.write('<!doctype html><meta charset="utf-8"><title>Name tags</title><style>@page{size:'+W+'mm '+H+'mm;margin:0}body{margin:0;font-family:Arial,sans-serif;background:#ddd}.bg{background:#fff;box-sizing:border-box;text-align:center;margin:0 auto 6px;position:relative;page-break-after:always;overflow:hidden}.np{padding:10px;background:#fff}@media print{.np{display:none}body{background:#fff}.bg{margin:0}}</style><div class="np"><button onclick="print()">Print / Save as PDF ('+W+'×'+H+' mm)</button> — '+list.length+' tag(s)</div>'+list.map(function(x){return badgeBlock(x,W,H);}).join('')+'<script>window.addEventListener("load",function(){setTimeout(function(){print()},700)})<\/script>');
  w.document.close();
}
window.rgBadgeOne=function(id){var x=REGS.filter(function(r){return r.id===id;})[0];if(x)printBadges([x]);};
/* drag helper: moves el inside box with the mouse/finger, writes % into inputs */
function makeDrag(el,box,xi,yi){
  el.style.cursor='move';el.style.touchAction='none';el.style.userSelect='none';
  el.onpointerdown=function(e){
    e.preventDefault();el.setPointerCapture(e.pointerId);
    var move=function(ev){var r=box.getBoundingClientRect();var px=Math.max(0,Math.min(100,(ev.clientX-r.left)/r.width*100)),py=Math.max(0,Math.min(100,(ev.clientY-r.top)/r.height*100));
      el.style.left=px+'%';el.style.top=py+'%';$(xi).value=px.toFixed(1);$(yi).value=py.toFixed(1);};
    var up=function(){el.removeEventListener('pointermove',move);el.removeEventListener('pointerup',up);$(xi).dispatchEvent(new Event('change',{bubbles:true}));};
    el.addEventListener('pointermove',move);el.addEventListener('pointerup',up);
  };
}
window.rgBadgePreview=function(){
  var W=Number($('rg-badge_w_mm').value)||105,H=Number($('rg-badge_h_mm').value)||148,pv=$('rg-badge-pv');
  var bw=Math.min(300,pv.parentNode.clientWidth||300),sc=bw/W;
  pv.style.width=bw+'px';pv.style.height=(H*sc)+'px';
  var nx=$('rg-badge_name_x').value,ny=$('rg-badge_name_y').value,nm=Number($('rg-badge_name_mm').value)||9,qx=$('rg-badge_qr_x').value,qy=$('rg-badge_qr_y').value,qm=Number($('rg-badge_qr_mm').value)||40;
  var sample='Dr. Sample Name';
  pv.innerHTML=($('rg-badge_bg_url').value?'<img src="'+h($('rg-badge_bg_url').value)+'" alt="" style="position:absolute;inset:0;width:100%;height:100%">':'')+'<div style="position:absolute;top:3px;left:0;right:0;text-align:center;font-size:'+(W*0.04*sc)+'px;color:#555">'+h(EV.title_en||'Event')+'</div>'+
   '<div id="bp-name" style="position:absolute;left:'+nx+'%;top:'+ny+'%;transform:translate(-50%,-50%);width:94%;text-align:center;font-weight:700;line-height:1.15;font-size:'+(fitMm(sample,W,nm)*sc)+'px;border:1px dashed #E8631E">'+sample+'</div>'+
   ($('rg-badge_show_qr').checked?'<div id="bp-qr" style="position:absolute;left:'+qx+'%;top:'+qy+'%;transform:translate(-50%,-50%);text-align:center;border:1px dashed #E8631E"><img alt="" style="display:block;width:'+(qm*sc)+'px;height:'+(qm*sc)+'px" src="'+qrDataUrl('SAMPLE123',200)+'"><div style="font:700 '+(W*0.035*sc)+'px monospace">SAMPLE123</div></div>':'');
  makeDrag($('bp-name'),pv,'rg-badge_name_x','rg-badge_name_y');if($('bp-qr'))makeDrag($('bp-qr'),pv,'rg-badge_qr_x','rg-badge_qr_y');
};
/* certificates */
window.rgCertPreview=function(){
  var u=$('rg-cert_template_url').value,pv=$('rg-cert-pv'),land=$('rg-cert_orientation').value!=='portrait';
  pv.style.aspectRatio=land?'297/210':'210/297';
  pv.innerHTML=(u?'<img src="'+h(u)+'" style="position:absolute;inset:0;width:100%;height:100%">':'<div style="padding:20px;color:#888">Upload a certificate template image</div>')+
   '<div id="rg-cert-name" style="position:absolute;left:'+$('rg-cert_name_x').value+'%;top:'+$('rg-cert_name_y').value+'%;transform:translate(-50%,-50%);white-space:nowrap;font-family:'+$('rg-cert_font').value+';color:'+$('rg-cert_color').value+';font-size:'+(Number($('rg-cert_font_mm').value||12)*(pv.clientWidth||600)/(land?297:210))+'px;border:1px dashed #E8631E;padding:0 4px">Dr. Sample Name</div>';
  makeDrag($('rg-cert-name'),pv,'rg-cert_name_x','rg-cert_name_y');
};
function loadScript(src){return new Promise(function(res,rej){var e=document.createElement('script');e.src=src;e.onload=res;e.onerror=rej;document.head.appendChild(e);});}
async function pdfToPng(file){
  if(!window.pdfjsLib){await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';}
  var pdf=await pdfjsLib.getDocument({data:await file.arrayBuffer()}).promise;
  var pg=await pdf.getPage(1),v1=pg.getViewport({scale:1}),sc=Math.min(3,2400/Math.max(v1.width,v1.height)),vp=pg.getViewport({scale:sc});
  var c=document.createElement('canvas');c.width=vp.width;c.height=vp.height;
  await pg.render({canvasContext:c.getContext('2d'),viewport:vp}).promise;
  var blob=await new Promise(function(r){c.toBlob(r,'image/png');});
  return {blob:blob,wmm:v1.width*25.4/72,hmm:v1.height*25.4/72};
}
async function uploadTemplate(file,prefix){
  var body=file,ext=(file.name.split('.').pop()||'png').toLowerCase().replace(/[^a-z0-9]/g,''),dims=null;
  if(file.type==='application/pdf'||ext==='pdf'){msg('Converting PDF…');var r0=await pdfToPng(file);body=r0.blob;ext='png';dims=r0;}
  var name=prefix+'-'+Date.now()+'.'+ext;
  var r=await sb.storage.from('website-media').upload(name,body,{contentType:body.type||undefined});
  if(r.error)throw r.error;
  return {url:sb.storage.from('website-media').getPublicUrl(name).data.publicUrl,dims:dims};
}
window.rgBadgeBgUpload=async function(inp){
  var file=inp.files[0];if(!file)return;
  try{var u=await uploadTemplate(file,'tag');
    $('rg-badge_bg_url').value=u.url;
    if(u.dims){$('rg-badge_size').value='custom';$('rg-badge_w_mm').value=Math.round(u.dims.wmm*10)/10;$('rg-badge_h_mm').value=Math.round(u.dims.hmm*10)/10;rgBadgeSizeUI();}
    rgBadgePreview();rgSave(true);}catch(e){msg(e.message||String(e),true);}
  inp.value='';
};
window.rgBadgeBgClear=function(){$('rg-badge_bg_url').value='';rgBadgePreview();rgSave(true);};
window.rgCertClear=function(){$('rg-cert_template_url').value='';rgCertPreview();rgSave(true);};
window.rgCertUpload=async function(inp){
  var file=inp.files[0];if(!file)return;
  try{var u=await uploadTemplate(file,'cert');
    $('rg-cert_template_url').value=u.url;
    if(u.dims)$('rg-cert_orientation').value=u.dims.wmm>=u.dims.hmm?'landscape':'portrait';
    rgCertPreview();rgSave(true);}catch(e){msg(e.message||String(e),true);}
  inp.value='';
};
function printCerts(list){
  if(!EV.cert_template_url){alert('Upload the certificate template first');return;}
  if(!list.length){alert('No registrants match (certificates default to attended only)');return;}
  var land=EV.cert_orientation!=='portrait',W=land?297:210,H=land?210:297;
  var w=window.open('','_blank');if(!w){alert('Allow pop-ups');return;}
  w.document.write('<!doctype html><meta charset="utf-8"><title>Certificates</title><style>@page{size:A4 '+(land?'landscape':'portrait')+';margin:0}body{margin:0;background:#ddd}.c{position:relative;width:'+W+'mm;height:'+H+'mm;margin:0 auto 6px;page-break-after:always;overflow:hidden;background:#fff}.c img{position:absolute;inset:0;width:100%;height:100%}.c div{position:absolute;left:'+EV.cert_name_x+'%;top:'+EV.cert_name_y+'%;transform:translate(-50%,-50%);white-space:nowrap;font-family:'+EV.cert_font+';color:'+EV.cert_color+';font-size:'+EV.cert_font_mm+'mm}.np{padding:10px;background:#fff}@media print{.np{display:none}body{background:#fff}.c{margin:0}}</style><div class="np"><button onclick="print()">Print / Save as PDF</button> — '+list.length+' certificate(s)</div>'+
   list.map(function(x){return '<div class="c"><img src="'+h(EV.cert_template_url)+'" alt=""><div>'+h((x.title?x.title+' ':'')+x.name)+'</div></div>';}).join('')+'<script>window.addEventListener("load",function(){setTimeout(function(){print()},900)})<\/script>');
  w.document.close();
}
window.rgCertAll=function(){var sc=$('rg-cert_scope_all').checked?'all':'attended';printCerts(REGS.filter(function(x){return sc==='all'?(x.status==='confirmed'||x.status==='attended'):x.status==='attended';}));};
window.rgCopyLink=function(code){var u=location.origin+'/event.html?e='+EV.slug+'&ticket='+code;(navigator.clipboard?navigator.clipboard.writeText(u):Promise.reject()).then(function(){toast('Link copied');},function(){prompt('Copy the link',u);});};
window.rgCopyCertLink=function(){var el=$('rg-cert-link');el.select();document.execCommand('copy');toast('Link copied');};
function kioskUrl(k){return location.origin+'/event.html?e='+EV.slug+'&kiosk='+k;}
window.rgKiosk=async function(regen){
  if(!EV)return;var r=await sb.from('reg_event_secrets').select('kiosk_key').eq('event_id',EV.id).maybeSingle();var k=r.data&&r.data.kiosk_key;
  if(regen&&k&&!confirm('Change the key? The old kiosk link will stop working.'))return;
  if(!k||regen){k=Math.random().toString(36).slice(2,8)+Math.random().toString(36).slice(2,8);var w=await sb.from('reg_event_secrets').upsert({event_id:EV.id,kiosk_key:k});if(w.error)return msg(w.error.message,true);}
  $('rg-kiosk-link').value=kioskUrl(k);};
window.rgCopyKiosk=function(){var el=$('rg-kiosk-link');if(!el.value)return msg('Press Show link first',true);el.select();document.execCommand('copy');toast('Link copied');};
window.rgOpenKiosk=function(){var u=$('rg-kiosk-link').value;if(u)window.open(u,'_blank');else msg('Press Show link first',true);};
window.rgQuickFind=function(){
  var q=($('rg-qf').value||'').trim().toLowerCase(),d=q.replace(/\D/g,''),out=$('rg-qf-out');
  if(q.length<3){out.innerHTML='';return;}
  var m=REGS.filter(function(x){var ph=(x.phone||'').replace(/\D/g,'');return (d.length>=4&&ph&&ph.indexOf(d.slice(-10))>-1)||x.code.toLowerCase()===q||(x.name||'').toLowerCase().indexOf(q)>-1||(x.email||'').toLowerCase()===q;}).slice(0,8);
  out.innerHTML=m.map(function(x){var id="'"+x.id+"'",at=x.status==='attended';return '<div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;padding:8px;border:1px solid var(--line);border-radius:6px;margin-top:6px"><span style="width:10px;height:10px;border-radius:50%;background:'+(at?'#22C55E':'#E5382B')+'"></span><b>'+h((x.title?x.title+' ':'')+x.name)+'</b><span dir="ltr" style="color:var(--ink-soft)">'+h(x.phone||'')+' - '+h(x.code)+'</span><span style="flex:1"></span>'+(at?'':'<button class="mini-btn pm-checkin" onclick="checkin(\''+x.code+'\');setTimeout(rgQuickFind,600)">Check-in</button>')+'<button class="mini-btn pm-print" onclick="rgBadgeOne('+id+')">Name tag</button><button class="mini-btn pm-print" onclick="rgCertOne('+id+')">Certificate</button></div>';}).join('')||'<p style="color:var(--ink-soft);font-size:.85rem">No match</p>';};
window.checkin=checkin;
window.rgCertOne=function(id){var x=REGS.filter(function(r){return r.id===id;})[0];if(x)printCerts([x]);};
/* poster */
window.rgPoster=function(){
  var url=location.origin+'/event.html?e='+EV.slug;
  var w=window.open('','_blank');if(!w){alert('Allow pop-ups');return;}
  w.document.write('<!doctype html><meta charset="utf-8"><title>Poster</title><style>@page{size:A4 portrait;margin:0}body{margin:0;font-family:Arial,Tahoma,sans-serif;text-align:center;padding:30mm 15mm}h1{font-size:34pt;margin:0 0 6mm}h2{font-size:22pt;margin:6mm 0}img{width:130mm;height:130mm}p{font-size:14pt;color:#444}.np{position:fixed;top:6px;left:6px}@media print{.np{display:none}}</style><div class="np"><button onclick="print()">Print</button></div><h1>'+h(EV.title_en||'')+'</h1><h1 dir="rtl">'+h(EV.title_ar||'')+'</h1><img alt="" src="'+qrDataUrl(url,700)+'"><h2>Scan to register — امسح للتسجيل</h2><p dir="ltr">'+h(url)+'</p>');
  w.document.close();
};
/* reception (walk-in) */
function fillReception(){
  $('rg-w-pkg').innerHTML=PKS.map(function(p){return '<option value="'+p.id+'">'+h(p.name_en||p.name_ar)+(Number(p.price)>0?' — '+p.price+' '+h(EV.currency||''):'')+'</option>';}).join('');
}
window.rgWalkin=async function(){
  var f=function(i){return $(i).value.trim();};
  var first=f('rg-w-first'),last=f('rg-w-last'),pkg=$('rg-w-pkg').value;
  if(!first||!last||!pkg)return msg('Package, first and last name are required',true);
  var p=PKS.filter(function(x){return x.id===pkg;})[0]||{price:0};
  var code=Array.prototype.map.call(crypto.getRandomValues(new Uint8Array(4)),function(b){return ('0'+b.toString(16)).slice(-2);}).join('').toUpperCase();
  var method=$('rg-w-pay').value,paid=Number(p.price)>0;
  var o={event_id:EV.id,package_id:pkg,code:code,name:first+' '+last,title:$('rg-w-title').value,email:f('rg-w-email'),phone:f('rg-w-phone'),
    data:{first_name:first,last_name:last,title:$('rg-w-title').value,phone:f('rg-w-phone')},status:'attended',attended_at:new Date().toISOString(),source:'walkin',
    payment_status:paid?(method?'paid':'unpaid'):'free',payment_method:paid?method:''};
  var r=await sb.from('reg_registrations').insert(o).select().single();
  if(r.error)return msg(r.error.message,true);
  msg('تم تسجيل '+o.name+'');
  ['rg-w-first','rg-w-last','rg-w-email','rg-w-phone'].forEach(function(i){$(i).value='';});
  await loadRegs();
  if($('rg-w-print').checked)printBadges([r.data]);
  $('rg-w-first').focus();
};
setInterval(function(){if(EV&&!document.hidden&&!(document.activeElement&&document.activeElement.closest&&document.activeElement.closest('#rg-card')))loadRegs();},20000);

/* ---- check-in ---- */
async function checkin(code){
  code=(code||'').trim().toUpperCase();if(!code)return;
  var x=REGS.filter(function(r){return r.code===code;})[0];
  var out=$('rg-ci-out');
  if(!x){out.style.color='#B33';out.textContent='Code not found: '+code;return;}
  if(x.status==='cancelled'||x.status==='waitlist'){out.style.color='#B33';out.textContent=''+x.name+' — status: '+x.status;return;}
  if(x.status==='attended'){out.style.color='#B77900';out.textContent='Already checked in: '+x.name;return;}
  await sb.from('reg_registrations').update({status:'attended',attended_at:new Date().toISOString()}).eq('id',x.id);
  out.style.color='#1a8f55';out.textContent=''+x.name+' — '+pname(x.package_id)+(x.payment_status==='unpaid'?' (UNPAID)':'');
  loadRegs();
}
window.rgCheckin=function(){checkin($('rg-ci-code').value);$('rg-ci-code').value='';};
window.rgScan=function(){
  if(!window.Html5Qrcode)return alert('Scanner library not loaded');
  if(scanner){scanner.stop().catch(function(){});scanner=null;$('rg-reader').style.display='none';return;}
  $('rg-reader').style.display='block';scanner=new Html5Qrcode('rg-reader');var last='',t=0;
  scanner.start({facingMode:'environment'},{fps:10,qrbox:220},function(txt){if(txt===last&&Date.now()-t<4000)return;last=txt;t=Date.now();checkin(txt);}).catch(function(e){alert(e);});
};
var tm=null;
function autosave(e){
  var t=e.target;if(!t.closest)return;
  var pk=t.closest('.rg-pk');
  if(pk){clearTimeout(tm);tm=setTimeout(function(){rgSavePkg(pk.dataset.id,true);},400);return;}
  if(t.closest('#rg-main')&&/^rg-/.test(t.id||'')&&!/^rg-(f-|ci-|link|w-)/.test(t.id)||t.closest('.rg-ff')){clearTimeout(tm);tm=setTimeout(function(){rgSave(true);},400);}
}
$('rg-main').addEventListener('change',autosave);
$('rg-select').onchange=pick;
['rg-f-status','rg-f-pkg'].forEach(function(i){$(i).onchange=renderRegs;});$('rg-f-q').oninput=renderRegs;
// checkSession() runs before this file loads, so load now if already signed in
if(document.getElementById('dashboard').style.display!=='none')window.loadRegAdmin();
})();
