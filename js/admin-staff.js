/* Staff management (admin only) — calls the staff-admin edge function */
(function(){
var sb=window.getSupabaseClient();
function $(i){return document.getElementById(i);}
function h(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function say(t,bad){var e=$('staff-msg');e.style.color=bad?'var(--orange-dark)':'#1a8f55';e.textContent=t;}
async function call(body){
  var r=await sb.functions.invoke('staff-admin',{body:body});
  if(r.error){var m=r.error.message;try{var j=await r.error.context.json();if(j&&j.error)m=j.error;}catch(e){}throw new Error(m);}
  if(r.data&&r.data.error)throw new Error(r.data.error);
  return r.data;
}
window.staffLoad=async function(){
  $('staff-link').textContent=location.origin+'/events-admin.html';
  try{var d=await call({action:'list'});}catch(e){$('staff-tbody').innerHTML='<tr><td colspan="4" style="color:var(--orange-dark)">'+h(e.message)+'</td></tr>';return;}
  $('staff-tbody').innerHTML=d.staff.map(function(x){
    var adm=x.role==='admin',id="'"+x.user_id+"'";
    return '<tr><td>'+h(x.name)+(adm?' <small>(admin)</small>':'')+'</td><td dir="ltr">'+(adm?'—':h(x.phone))+'</td><td>'+(x.active?'🟢 active':'⚪ disabled')+'</td><td style="white-space:nowrap">'+
      (adm?'':'<button class="mini-btn" onclick="staffPass('+id+')">🔑 Password</button> <button class="mini-btn" onclick="staffToggle('+id+','+(!x.active)+')">'+(x.active?'Disable':'Enable')+'</button> <button class="mini-btn" onclick="staffDel('+id+')">🗑</button>')+'</td></tr>';}).join('');
};
window.staffAdd=async function(){
  try{await call({action:'create',name:$('st-name').value,phone:$('st-phone').value,password:$('st-pass').value});
    say('تمت إضافة الموظف ✓ — يدخل برقم تليفونه والباسورد');$('st-name').value=$('st-phone').value=$('st-pass').value='';staffLoad();}
  catch(e){say(e.message,true);}
};
window.staffPass=async function(id){var p=prompt('New password (8+ characters)');if(!p)return;try{await call({action:'set_password',user_id:id,password:p});say('تم تغيير الباسورد ✓');}catch(e){say(e.message,true);}};
window.staffToggle=async function(id,a){try{await call({action:'set_active',user_id:id,active:a});staffLoad();}catch(e){say(e.message,true);}};
window.staffDel=async function(id){if(!confirm('Delete this staff account?'))return;try{await call({action:'delete',user_id:id});staffLoad();}catch(e){say(e.message,true);}};
var t=setInterval(function(){if($('dashboard')&&$('dashboard').style.display!=='none'){clearInterval(t);staffLoad();}},500);
})();
