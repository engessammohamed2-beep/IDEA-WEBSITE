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
function msg(t,bad){toast(bad?('✕ '+t):(/✓/.test(t)?t.replace('✓','').trim()+' ✓':t),bad);var e=$('rg-msg');e.style.color=bad?'var(--orange-dark)':'#2FBE7A';e.textContent=t;if(!bad)setTimeout(function(){e.textContent='';},3500);}
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
  $('rg-form_lang').value=EV.form_lang||'auto';
  ['published','registration_open','show_countdown','show_payment','notify_admin'].forEach(function(k){$('rg-'+k).checked=!!EV[k];});
  $('rg-link').value=location.origin+'/event.html?e='+EV.slug;
  renderFields();await loadPkgs();await loadRegs();
  if($('rg-frame').dataset.slug!==EV.slug)rgPreview();
}
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
  o.form_lang=$('rg-form_lang').value;
  o.start_at=fromLocal($('rg-start_at').value);o.end_at=fromLocal($('rg-end_at').value);o.registration_deadline=fromLocal($('rg-registration_deadline').value);
  ['published','registration_open','show_countdown','show_payment','notify_admin'].forEach(function(k){o[k]=$('rg-'+k).checked;});
  o.form_fields=readFields();
  var r=await sb.from('reg_events').update(o).eq('id',EV.id);
  if(r.error)return msg(r.error.message,true);
  if(auto===true){Object.assign(EV,o);var op=$('rg-select').selectedOptions[0];if(op)op.textContent=label(o);$('rg-link').value=location.origin+'/event.html?e='+o.slug;msg('تم الحفظ تلقائياً ✓');rgPreview();return;}
  msg('تم الحفظ — Saved ✓');await loadRegAdmin();
};
window.rgDelete=async function(){
  if(!confirm('Delete this event with ALL its packages and registrations?'))return;
  var r=await sb.from('reg_events').delete().eq('id',EV.id);
  if(r.error)return msg(r.error.message,true);
  EV=null;loadRegAdmin();
};
window.rgUpload=async function(inp){
  var file=inp.files[0];if(!file)return;
  var name=Date.now()+'-'+file.name.replace(/[^a-zA-Z0-9._-]/g,'_');
  var r=await sb.storage.from('website-media').upload(name,file);
  if(r.error)return msg(r.error.message,true);
  $('rg-cover_image_url').value=sb.storage.from('website-media').getPublicUrl(name).data.publicUrl;
  msg('Uploaded ✓');rgSave(true);
};
window.rgCopy=function(){$('rg-link').select();document.execCommand('copy');msg('Link copied ✓');};

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
   '<button class="mini-btn" onclick="rgMove('+i+',-1)">↑</button><button class="mini-btn" onclick="rgMove('+i+',1)">↓</button><button class="mini-btn" onclick="rgDelField('+i+')">✕</button></div>';}).join('')||'<p style="color:var(--ink-soft);font-size:.88rem">No extra fields. Name + email are always included.</p>';
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
window.rgSavePkg=async function(id){
  var row=document.querySelector('.rg-pk[data-id="'+id+'"]'),o={};
  row.querySelectorAll('[data-k]').forEach(function(el){o[el.dataset.k]=el.type==='checkbox'?el.checked:el.value;});
  o.price=Number(o.price)||0;o.capacity=o.capacity===''?null:Number(o.capacity);o.sort_order=Number(o.sort_order)||0;
  var r=await sb.from('reg_packages').update(o).eq('id',id);
  msg(r.error?r.error.message:'تم حفظ الباقة ✓',!!r.error);rgPreview();
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
  var c={confirmed:0,waitlist:0,cancelled:0,attended:0};REGS.forEach(function(x){c[x.status]++;});
  $('rg-stats').textContent='Total '+REGS.length+' · Confirmed '+c.confirmed+' · Attended '+c.attended+' · Waitlist '+c.waitlist+' · Cancelled '+c.cancelled;
  var ST=['confirmed','waitlist','cancelled','attended'],PY=['unpaid','paid','free'];
  $('rg-tbody').innerHTML=list.map(function(x){return '<tr><td dir="ltr"><b>'+h(x.code)+'</b></td><td>'+h(x.name)+'</td><td dir="ltr">'+h(x.email)+'<br>'+h(x.phone)+'</td><td>'+h(pname(x.package_id))+'</td>'+
   '<td><select onchange="rgSet(\''+x.id+'\',\'status\',this.value)">'+ST.map(function(s){return '<option'+(s===x.status?' selected':'')+'>'+s+'</option>';}).join('')+'</select></td>'+
   '<td><select onchange="rgSet(\''+x.id+'\',\'payment_status\',this.value)">'+PY.map(function(s){return '<option'+(s===x.payment_status?' selected':'')+'>'+s+'</option>';}).join('')+'</select></td>'+
   '<td style="font-size:.78rem">'+new Date(x.created_at).toLocaleString()+'</td><td><button class="mini-btn" onclick="rgDelReg(\''+x.id+'\')">✕</button></td></tr>';}).join('')||'<tr><td colspan="8" style="color:var(--ink-soft)">No registrations</td></tr>';
}
window.rgRender=renderRegs;
window.rgSet=async function(id,k,v){var o={};o[k]=v;if(k==='status')o.attended_at=v==='attended'?new Date().toISOString():null;await sb.from('reg_registrations').update(o).eq('id',id);loadRegs();};
window.rgDelReg=async function(id){if(!confirm('Delete registration?'))return;await sb.from('reg_registrations').delete().eq('id',id);loadRegs();};

/* ---- export ---- */
function rows(){
  var ff=EV.form_fields||[];
  return filtered().map(function(x){var o={Code:x.code,Name:x.name,Email:x.email,Package:pname(x.package_id),Status:x.status,Payment:x.payment_status,Registered:new Date(x.created_at).toLocaleString()};
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
  var listHtml=title+'<table><tr><th>#</th><th>Code</th><th>Name</th><th>Email</th><th>Phone</th><th>Package</th><th>Status</th><th>Payment</th></tr>'+list.map(function(x,i){return '<tr><td>'+(i+1)+'</td><td>'+h(x.code)+'</td><td>'+h(x.name)+'</td><td>'+h(x.email)+'</td><td>'+h(x.phone)+'</td><td>'+h(pname(x.package_id))+'</td><td>'+h(x.status)+'</td><td>'+h(x.payment_status)+'</td></tr>';}).join('')+'</table>';
  if(mode==='list')return printWin(listHtml);
  var badges=list.map(function(x){return '<div class="b"><h3>'+h(EV.title_en||EV.title_ar)+'</h3><div class="n">'+h(x.name)+'</div><div>'+h(pname(x.package_id))+'</div><img width="130" height="130" alt="" src="https://api.qrserver.com/v1/create-qr-code/?size=260x260&data='+encodeURIComponent(x.code)+'"><div class="c">'+h(x.code)+'</div></div>';}).join('');
  printWin(mode==='badges'?badges:listHtml+'<div style="page-break-before:always"></div>'+badges);
};

/* ---- check-in ---- */
async function checkin(code){
  code=(code||'').trim().toUpperCase();if(!code)return;
  var x=REGS.filter(function(r){return r.code===code;})[0];
  var out=$('rg-ci-out');
  if(!x){out.style.color='#B33';out.textContent='✕ Code not found: '+code;return;}
  if(x.status==='cancelled'||x.status==='waitlist'){out.style.color='#B33';out.textContent='✕ '+x.name+' — status: '+x.status;return;}
  if(x.status==='attended'){out.style.color='#B77900';out.textContent='⚠ Already checked in: '+x.name;return;}
  await sb.from('reg_registrations').update({status:'attended',attended_at:new Date().toISOString()}).eq('id',x.id);
  out.style.color='#1a8f55';out.textContent='✓ '+x.name+' — '+pname(x.package_id)+(x.payment_status==='unpaid'?' (UNPAID)':'');
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
  if(pk){clearTimeout(tm);tm=setTimeout(function(){rgSavePkg(pk.dataset.id);},900);return;}
  if(t.closest('#rg-main')&&/^rg-/.test(t.id||'')&&!/^rg-(f-|ci-|link)/.test(t.id)||t.closest('.rg-ff')){clearTimeout(tm);tm=setTimeout(function(){rgSave(true);},900);}
}
$('rg-main').addEventListener('input',autosave);$('rg-main').addEventListener('change',autosave);
$('rg-select').onchange=pick;
['rg-f-status','rg-f-pkg'].forEach(function(i){$(i).onchange=renderRegs;});$('rg-f-q').oninput=renderRegs;
})();
