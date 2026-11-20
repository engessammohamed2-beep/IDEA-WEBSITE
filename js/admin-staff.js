/* Staff management (admin only) */
(function(){
var sb=window.getSupabaseClient();
function $(i){return document.getElementById(i);}
function h(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function say(t,bad){var e=$('staff-msg');e.style.color=bad?'var(--orange-dark)':'#1a8f55';e.textContent=t;}
var PERMS=[['view','عرض المسجلين','View registrants'],['edit','تعديل وحذف المسجلين','Edit / delete'],['walkin','تسجيل في المكان','Walk-in registration'],['checkin','تسجيل الحضور (Check-in)','Check-in'],['print','طباعة النيم تاج والشهادات','Print tags & certificates'],['export','تصدير Excel / PDF','Export'],['manage_events','تحكم كامل في المؤتمرات (إعدادات، فورم، باكدجات)','Full event control']];
var PRESETS={full:['view','edit','walkin','checkin','print','export','manage_events'],reception:['view','walkin','checkin','print'],viewer:['view','export']};
function obj(list){var o={};PERMS.forEach(function(p){o[p[0]]=list.indexOf(p[0])>-1;});return o;}
async function call(body){
  var r=await sb.functions.invoke('staff-admin',{body:body});
  if(r.error){var m=r.error.message;try{var j=await r.error.context.json();if(j&&j.error)m=j.error;}catch(e){}throw new Error(m);}
  if(r.data&&r.data.error)throw new Error(r.data.error);
  return r.data;
}
function presetSel(id){return '<select id="'+id+'" style="padding:6px;border:1px solid var(--line);border-radius:5px"><option value="reception">Preset: Reception (view, walk-in, check-in, print)</option><option value="full">Preset: Full control</option><option value="viewer">Preset: Viewer (view, export)</option><option value="none">Preset: Nothing (choose manually)</option></select>';}
window.staffLoad=async function(){
  $('staff-link').textContent=location.origin+'/events-admin.html';
  if(!$('st-preset').innerHTML)$('st-preset').outerHTML=presetSel('st-preset');
  try{var d=await call({action:'list'});}catch(e){$('staff-tbody').innerHTML='<tr><td colspan="4" style="color:var(--orange-dark)">'+h(e.message)+'</td></tr>';return;}
  $('staff-tbody').innerHTML=d.staff.map(function(x){
    var adm=x.role==='admin',id="'"+x.user_id+"'",pm=x.perms||{};
    var boxes=adm?'<i style="color:var(--ink-soft)">كل الصلاحيات</i>':'<div style="display:grid;gap:3px;font-size:.8rem">'+PERMS.map(function(p){return '<label style="display:flex;gap:6px;align-items:center"><input type="checkbox" '+(pm[p[0]]?'checked ':'')+'onchange="staffPerm('+id+',\''+p[0]+'\',this.checked)">'+p[1]+(p[0]==='manage_events'?' ⭐':'')+'</label>';}).join('')+'<div style="margin-top:4px"><button class="mini-btn" onclick="staffPreset('+id+',\'full\')">Full control</button> <button class="mini-btn" onclick="staffPreset('+id+',\'reception\')">Reception</button> <button class="mini-btn" onclick="staffPreset('+id+',\'viewer\')">Viewer</button></div></div>';
    return '<tr><td>'+h(x.name)+(adm?' <small>(admin)</small>':'')+'<br><span dir="ltr" style="font-size:.8rem;color:var(--ink-soft)">'+(adm?'':h(x.phone))+'</span></td><td>'+boxes+'</td><td>'+(x.active?'🟢 active':'⚪ disabled')+'</td><td style="white-space:nowrap">'+
      (adm?'':'<button class="mini-btn" onclick="staffPass('+id+')">🔑 Password</button> <button class="mini-btn" onclick="staffToggle('+id+','+(!x.active)+')">'+(x.active?'Disable':'Enable')+'</button> <button class="mini-btn" onclick="staffDel('+id+')">🗑</button>')+'</td></tr>';}).join('');
  window._staff=d.staff;
};
window.staffPerm=async function(id,k,v){
  var x=(window._staff||[]).filter(function(s){return s.user_id===id;})[0];var pm=Object.assign({},x.perms||{});pm[k]=v;
  try{await call({action:'set_perms',user_id:id,perms:pm});x.perms=pm;say('تم حفظ الصلاحيات ✓');}catch(e){say(e.message,true);staffLoad();}
};
window.staffPreset=async function(id,name){try{await call({action:'set_perms',user_id:id,perms:obj(PRESETS[name])});say('تم تطبيق الصلاحيات ✓');staffLoad();}catch(e){say(e.message,true);}};
window.staffAdd=async function(){
  var pr=$('st-preset').value;
  try{await call({action:'create',name:$('st-name').value,phone:$('st-phone').value,password:$('st-pass').value,perms:obj(PRESETS[pr]||[])});
    say('تمت إضافة الموظف ✓ — يدخل برقم تليفونه والباسورد');$('st-name').value=$('st-phone').value=$('st-pass').value='';staffLoad();}
  catch(e){say(e.message,true);}
};
window.staffPass=async function(id){var p=prompt('New password (8+ characters)');if(!p)return;try{await call({action:'set_password',user_id:id,password:p});say('تم تغيير الباسورد ✓');}catch(e){say(e.message,true);}};
window.staffToggle=async function(id,a){try{await call({action:'set_active',user_id:id,active:a});staffLoad();}catch(e){say(e.message,true);}};
window.staffDel=async function(id){if(!confirm('Delete this staff account?'))return;try{await call({action:'delete',user_id:id});staffLoad();}catch(e){say(e.message,true);}};
var t=setInterval(function(){if($('dashboard')&&$('dashboard').style.display!=='none'){clearInterval(t);staffLoad();}},500);
})();
