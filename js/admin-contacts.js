/* Contacts (doctors database), import with column mapping, invitations */
(function(){
var sb=window.getSupabaseClient();
function $(i){return document.getElementById(i);}
function h(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function say(t,bad){var e=$('ct-msg');if(!e)return;e.style.color=bad?'#C0392B':'#1a8f55';e.textContent=t;if(!bad)setTimeout(function(){e.textContent='';},4000);}
var FIELDS=[['name','Name - الاسم'],['first','First name'],['last','Last name'],['title','Title - اللقب'],['email','Email - الإيميل'],['phone','Phone - التليفون'],['country','Country - الدولة'],['organization','Organization - الجهة'],['notes','Notes - ملاحظات'],['extra','Keep as extra data'],['skip','Ignore this column']];
var SYN={name:['name','full name','fullname','doctor','doctor name','dr name','الاسم','اسم','الاسم بالكامل','الاسم الكامل','اسم الدكتور'],first:['first name','firstname','first','given name','الاسم الاول','الاسم الأول'],last:['last name','lastname','last','surname','family name','العائلة','اسم العائلة','الاسم الاخير','اللقب العائلي'],title:['title','prefix','degree','لقب','اللقب','الدرجة'],email:['email','e-mail','e mail','mail','email address','الايميل','الإيميل','البريد','البريد الالكتروني','البريد الإلكتروني','ايميل','إيميل'],phone:['phone','mobile','tel','telephone','whatsapp','phone number','mobile number','cell','موبايل','الموبايل','تليفون','التليفون','رقم','هاتف','الهاتف','جوال','رقم الموبايل','رقم الهاتف','رقم التليفون','واتساب'],country:['country','nation','nationality','الدولة','البلد','دولة','بلد'],organization:['organization','organisation','hospital','company','institution','affiliation','workplace','university','الجهة','المستشفى','جهة العمل','الشركة','الجامعة','مكان العمل'],notes:['notes','note','comments','comment','remarks','ملاحظات','ملاحظة']};
function norm(s){return String(s||'').toLowerCase().replace(/[ً-ٟ_\-\.:]/g,' ').replace(/\s+/g,' ').trim();}
var ROWS=[],HEAD=[],CT=[],EDITING=null;
function detect(head,rows){
  var used={},map=[];
  head.forEach(function(hd,i){var n=norm(hd),f=null;Object.keys(SYN).forEach(function(k){if(!f&&SYN[k].some(function(s){return norm(s)===n;}))f=k;});
    if(!f){Object.keys(SYN).forEach(function(k){if(!f&&SYN[k].some(function(s){s=norm(s);return s.length>3&&n.indexOf(s)>-1;}))f=k;});}
    map[i]=f&&!(used[f]&&f!=='extra')?f:null;if(map[i])used[map[i]]=1;});
  head.forEach(function(hd,i){if(map[i])return;
    var vals=rows.slice(0,30).map(function(r){return String(r[i]==null?'':r[i]).trim();}).filter(Boolean);if(!vals.length){map[i]='skip';return;}
    var em=vals.filter(function(v){return /^\S+@\S+\.\S+$/.test(v);}).length/vals.length,ph=vals.filter(function(v){return /^[+\d][\d\s()\-]{6,}$/.test(v);}).length/vals.length;
    if(em>.6&&!used.email){map[i]='email';used.email=1;}else if(ph>.6&&!used.phone){map[i]='phone';used.phone=1;}else map[i]='extra';});
  return map;
}
window.ctFile=async function(inp){
  var f=inp.files[0];if(!f)return;
  try{var wb;if(/\.csv$/i.test(f.name))wb=XLSX.read(await f.text(),{type:'string'});else wb=XLSX.read(await f.arrayBuffer(),{type:'array'});
    var data=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],{header:1,defval:'',raw:false});
    data=data.filter(function(r){return r.some(function(c){return String(c).trim()!=='';});});
    if(data.length<2)return say('The file has no data rows',true);
    HEAD=data[0].map(function(x,i){return String(x||'').trim()||('Column '+(i+1));});ROWS=data.slice(1);
    var map=detect(HEAD,ROWS);
    $('ct-map').innerHTML='<div style="margin:8px 0"><b>'+ROWS.length+' rows found.</b> الخانات اتعرفت تلقائي. راجع الربط وغيّره من القائمة لو في غلط، وبعدين اضغط Import.</div><div style="overflow-x:auto"><table class="admin-table"><thead><tr><th>Column in your file</th><th>Example</th><th>Goes to (our field)</th></tr></thead><tbody>'+
      HEAD.map(function(hd,i){var ex=ROWS.slice(0,3).map(function(r){return String(r[i]==null?'':r[i]);}).filter(Boolean).join(' | ');return '<tr><td><b>'+h(hd)+'</b></td><td style="font-size:.8rem;color:var(--ink-soft);max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+h(ex)+'</td><td><select data-col="'+i+'" style="padding:5px;border:1px solid var(--line);border-radius:5px">'+FIELDS.map(function(o){return '<option value="'+o[0]+'"'+(map[i]===o[0]?' selected':'')+'>'+o[1]+'</option>';}).join('')+'</select></td></tr>';}).join('')+
      '</tbody></table></div><div style="margin-top:8px"><button class="mini-btn primary" onclick="ctImport()">Import '+ROWS.length+' rows</button> <button class="mini-btn" onclick="ctCancelImport()">Cancel</button></div>';
  }catch(e){say(e.message||String(e),true);}
};
window.ctCancelImport=function(){$('ct-map').innerHTML='';$('ct-file').value='';ROWS=[];};
function cleanPhone(v){v=String(v||'').trim();if(!v)return '';var d=v.replace(/\D/g,'');if(/^1\d{9}$/.test(d)&&v.replace(/[\s\-]/g,'')===d)return '0'+d;return v.replace(/\s+/g,' ');}
window.ctImport=async function(){
  var map={};document.querySelectorAll('#ct-map select[data-col]').forEach(function(s){map[s.getAttribute('data-col')]=s.value;});
  var out=[],emails={},phones={};CT.forEach(function(c){if(c.email)emails[c.email.toLowerCase()]=1;if(c.phone)phones[c.phone.replace(/\D/g,'').slice(-10)]=1;});
  var dup=0,bad=0;
  ROWS.forEach(function(r){
    var o={name:'',title:'',email:'',phone:'',country:'',organization:'',notes:'',data:{},source:'import'},first='',last='';
    HEAD.forEach(function(hd,i){var v=String(r[i]==null?'':r[i]).trim();if(!v)return;var f=map[i];
      if(f==='first')first=v;else if(f==='last')last=v;else if(f==='extra')o.data[hd]=v;else if(f&&f!=='skip')o[f]=o[f]?o[f]+' '+v:v;});
    if(!o.name)o.name=(first+' '+last).trim();
    o.phone=cleanPhone(o.phone);o.email=o.email.toLowerCase().replace(/\s/g,'');
    if(o.country){var nz=window.countryNormalize(o.country);o.country=nz.value;}
    if(!o.name&&!o.email&&!o.phone){bad++;return;}
    var pk=o.phone?o.phone.replace(/\D/g,'').slice(-10):'';
    if((o.email&&emails[o.email])||(!o.email&&pk&&phones[pk])){dup++;return;}
    if(o.email)emails[o.email]=1;if(pk)phones[pk]=1;out.push(o);});
  if(!out.length)return say('Nothing new to import ('+dup+' duplicates, '+bad+' empty rows)',true);
  for(var i=0;i<out.length;i+=200){var r=await sb.from('reg_contacts').insert(out.slice(i,i+200));if(r.error)return say(r.error.message,true);}
  say('Imported '+out.length+' - تم استيراد '+out.length+' (skipped '+dup+' duplicates'+(bad?', '+bad+' empty':'')+')');ctCancelImport();ctLoad();
};
window.ctAdd=async function(){
  var o={};['name','title','email','phone','country','organization','notes'].forEach(function(k){o[k]=$('ct-n-'+k).value.trim();});
  if(!o.name&&!o.email&&!o.phone)return say('Enter at least a name, email or phone',true);
  if(o.country)o.country=window.countryNormalize(o.country).value;o.email=o.email.toLowerCase();o.phone=cleanPhone(o.phone);o.source='manual';
  var r=await sb.from('reg_contacts').insert(o);if(r.error)return say(r.error.message,true);
  ['name','title','email','phone','country','organization','notes'].forEach(function(k){$('ct-n-'+k).value='';});say('Added - تمت الإضافة');ctLoad();
};
window.ctLoad=async function(){
  var all=[],from=0;
  while(true){var r=await sb.from('reg_contacts').select('*').order('created_at',{ascending:false}).range(from,from+999);if(r.error){say(r.error.message,true);break;}all=all.concat(r.data||[]);if(!r.data||r.data.length<1000)break;from+=1000;}
  CT=all;var cs={};CT.forEach(function(c){if(c.country)cs[c.country]=1;});
  var cur=$('ct-f-country').value;$('ct-f-country').innerHTML='<option value="">All countries</option>'+Object.keys(cs).sort().map(function(c){return '<option>'+h(c)+'</option>';}).join('');$('ct-f-country').value=cur;
  ctRender();
};
function link(){return $('ct-link').value.trim();}
function regEmails(){var R=window._rg?window._rg.regs():[],m={},p={};R.forEach(function(x){if(x.status==='cancelled')return;if(x.email)m[x.email.toLowerCase()]=1;if(x.phone)p[x.phone.replace(/\D/g,'').slice(-10)]=1;});return {m:m,p:p};}
function filt(){
  var q=($('ct-f-q').value||'').toLowerCase(),c=$('ct-f-country').value,mode=$('ct-f-mode').value,re=regEmails();
  return CT.filter(function(x){
    if(c&&x.country!==c)return false;
    if(q&&(x.name+' '+x.email+' '+x.phone+' '+x.organization+' '+x.country).toLowerCase().indexOf(q)<0)return false;
    var reg=(x.email&&re.m[x.email.toLowerCase()])||(x.phone&&re.p[x.phone.replace(/\D/g,'').slice(-10)]);
    if(mode==='notreg'&&reg)return false;if(mode==='reg'&&!reg)return false;return true;});
}
function msgFor(x){var nm=((x.title?x.title+' ':'')+x.name).trim();return $('ct-body').value.split('{name}').join(nm).split('{link}').join(link());}
function waNum(p){var d=String(p||'').replace(/\D/g,'');if(!d)return '';if(d.indexOf('00')===0)d=d.slice(2);else if(/^01\d{9}$/.test(d))d='2'+d;return d;}
window.ctRender=function(){
  var L=filt();$('ct-count').textContent=L.length+' of '+CT.length+' contacts';
  $('ct-tbody').innerHTML=L.slice(0,200).map(function(x){var id="'"+x.id+"'";
    function inp(k,w){return '<input value="'+h(x[k])+'" onchange="ctSet('+id+',\''+k+'\',this.value)" style="width:'+w+';padding:4px;border:1px solid var(--line);border-radius:4px;font-size:.8rem">';}
    var wa=waNum(x.phone);
    return '<tr><td>'+inp('title','50px')+' '+inp('name','150px')+'</td><td dir="ltr">'+inp('email','180px')+'</td><td dir="ltr">'+inp('phone','120px')+'</td><td>'+inp('country','110px')+'</td><td>'+inp('organization','130px')+'</td><td style="white-space:nowrap">'+(wa?'<a class="mini-btn" target="_blank" rel="noopener" href="https://wa.me/'+wa+'?text='+encodeURIComponent(msgFor(x))+'">WhatsApp</a> ':'')+(x.email?'<a class="mini-btn" href="mailto:'+encodeURIComponent(x.email).replace('%40','@')+'?subject='+encodeURIComponent($('ct-subject').value)+'&body='+encodeURIComponent(msgFor(x))+'">Email</a> ':'')+'<button class="mini-btn" onclick="ctDel('+id+')">Delete</button></td></tr>';}).join('')||'<tr><td colspan="6" style="color:var(--ink-soft)">No contacts</td></tr>';
  if(L.length>200)$('ct-count').textContent+=' (showing the first 200, use search or filters; Copy/Export use all '+L.length+')';
};
window.ctSet=async function(id,k,v){var o={};o[k]=k==='email'?v.trim().toLowerCase():k==='country'?(v?window.countryNormalize(v).value:''):v.trim();var r=await sb.from('reg_contacts').update(o).eq('id',id);if(r.error)say(r.error.message,true);else{var c=CT.filter(function(x){return x.id===id;})[0];if(c)c[k]=o[k];say('Saved');}};
window.ctDel=async function(id){if(!confirm('Delete this contact?'))return;var r=await sb.from('reg_contacts').delete().eq('id',id);if(r.error)return say(r.error.message,true);ctLoad();};
window.ctCopyEmails=function(){var e=filt().map(function(x){return x.email;}).filter(Boolean);if(!e.length)return say('No emails in this list',true);var t=e.join(', ');var ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();say('Copied '+e.length+' emails - paste them in BCC');};
window.ctExport=function(){var L=filt();var rows=L.map(function(x){return {Title:x.title,Name:x.name,Email:x.email,Phone:x.phone,Country:x.country,Organization:x.organization,Notes:x.notes,Message:msgFor(x)};});if(!rows.length)return say('Nothing to export',true);var wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(rows),'Contacts');XLSX.writeFile(wb,'contacts-invitations.xlsx');};
window.ctTemplate=function(){var f=document.createElement('a');var wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet([['Title','Name','Email','Phone','Country','Organization','Notes'],['Dr.','Ahmed Ali','ahmed@example.com','01012345678','Egypt','Cairo University','']]),'Contacts');XLSX.writeFile(wb,'contacts-template.xlsx');};
window.ctSaveInvite=async function(){var EV=window._rg&&window._rg.ev();if(!EV)return say('Select an event first',true);var r=await sb.from('reg_events').update({invite_subject:$('ct-subject').value,invite_body:$('ct-body').value}).eq('id',EV.id);if(r.error)return say(r.error.message,true);EV.invite_subject=$('ct-subject').value;EV.invite_body=$('ct-body').value;say('Invitation saved for this event - تم حفظ الدعوة');};
window.ctPreview=function(){var x=filt()[0]||{name:'Ahmed Ali',title:'Dr.'};$('ct-preview').textContent=msgFor(x);};
window.ctInit=function(){
  var EV=window._rg&&window._rg.ev();if(!EV)return;
  $('ct-link').value=location.origin+'/event.html?e='+EV.slug;
  $('ct-subject').value=EV.invite_subject||('Invitation: '+(EV.title_en||EV.title_ar||''));
  $('ct-body').value=EV.invite_body||('Dear {name},\n\nWe would be delighted to invite you to '+(EV.title_en||EV.title_ar||'our conference')+'.\nPlease register using this link:\n{link}\n\nBest regards,\nIDEA-EG');
  ctRender();
};
var t=setInterval(function(){if($('ct-tbody')&&$('dashboard')&&$('dashboard').style.display!=='none'||($('ct-tbody')&&document.querySelector('#rg-main')&&document.querySelector('#rg-main').style.display!=='none')){clearInterval(t);ctLoad();ctInit();}},700);
var last=null;setInterval(function(){var EV=window._rg&&window._rg.ev();if(EV&&EV.id!==last){last=EV.id;ctInit();}},1000);
})();
