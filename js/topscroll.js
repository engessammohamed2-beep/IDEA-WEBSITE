/* Adds a horizontal scrollbar above wide tables (synced with the bottom one) */
(function(){
function setup(el){
  if(el._ts)return;el._ts=1;
  var top=document.createElement('div'),inner=document.createElement('div');
  top.style.cssText='overflow-x:auto;overflow-y:hidden;height:16px;margin-bottom:2px';inner.style.height='1px';top.appendChild(inner);
  el.parentNode.insertBefore(top,el);
  var lock=false;
  top.addEventListener('scroll',function(){if(lock){lock=false;return;}lock=true;el.scrollLeft=top.scrollLeft;});
  el.addEventListener('scroll',function(){if(lock){lock=false;return;}lock=true;top.scrollLeft=el.scrollLeft;});
  function upd(){var w=el.scrollWidth,show=w>el.clientWidth+2&&el.clientWidth>0;inner.style.width=w+'px';top.style.display=show?'block':'none';}
  upd();
  if(window.ResizeObserver){var ro=new ResizeObserver(upd);ro.observe(el);if(el.firstElementChild)ro.observe(el.firstElementChild);}
  if(window.MutationObserver)new MutationObserver(upd).observe(el,{childList:true,subtree:true});
  setInterval(upd,1500);
}
function scan(){document.querySelectorAll('div[style*="overflow-x:auto"],div[style*="overflow-x: auto"]').forEach(function(e){if(e.querySelector('table'))setup(e);});}
document.addEventListener('DOMContentLoaded',scan);setInterval(scan,1500);
})();
