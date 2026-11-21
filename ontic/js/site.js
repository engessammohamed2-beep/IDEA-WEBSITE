var BF_OPTS={base:'img/butterflies/',spread:true};
function bfPref(){try{return localStorage.getItem('ontic_bf')!=='0'}catch(e){return true}}
function bfStore(v){try{localStorage.setItem('ontic_bf',v?'1':'0')}catch(e){}}
window.addEventListener('load',function(){
  var on=bfPref();
  if(on&&window.startButterflies)window.startButterflies(BF_OPTS);
  var cb=document.getElementById('bfToggle');
  if(cb){cb.checked=on;cb.onchange=function(){
    bfStore(cb.checked);
    if(cb.checked){window.startButterflies(BF_OPTS);if(window.bfSet)window.bfSet(true);}
    else if(window.bfSet)window.bfSet(false);
  };}
});
document.querySelectorAll('[data-tabs]').forEach(function(w){
  var bs=w.querySelectorAll('.tabs button'),ps=w.querySelectorAll('[data-pane]');
  function go(k){bs.forEach(function(b){b.classList.toggle('on',b.dataset.k===k)});ps.forEach(function(p){p.hidden=p.dataset.pane!==k});}
  bs.forEach(function(b){b.onclick=function(){go(b.dataset.k);}});
  go(bs[0].dataset.k);
});
