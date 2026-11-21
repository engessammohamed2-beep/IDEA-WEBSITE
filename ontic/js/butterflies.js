/* Slow, continuous butterfly flight over the whole page. Not stopped by reduced-motion on purpose. */
(function(){
var started=false;
window.startButterflies=function(opts){
  if(started)return;started=true;opts=opts||{};
  var base=(opts.base||'images/butterflies/'),N=6;
  var box=document.createElement('div');box.setAttribute('aria-hidden','true');
  box.style.cssText='position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:60';document.body.appendChild(box);
  var W=window.innerWidth,H=window.innerHeight;window.addEventListener('resize',function(){W=window.innerWidth;H=window.innerHeight;});
  var cover=document.querySelector('.ev-hero-img'),sx=W/2,sy=H*0.5;
  if(cover){var r=cover.getBoundingClientRect();if(r.bottom>0&&r.top<H){sx=r.left+r.width/2;sy=Math.min(H-40,Math.max(40,r.top+r.height*0.7));}}
  var bs=[];
  for(var i=0;i<N;i++){
    var wrap=document.createElement('div'),img=new Image();img.src=base+'b'+(i+1)+'.png';img.alt='';img.draggable=false;
    var size=44+Math.random()*30;wrap.style.cssText='position:absolute;left:0;top:0;width:'+size+'px;will-change:transform;opacity:0;transition:opacity 1.2s';
    img.style.cssText='display:block;width:100%;height:auto;will-change:transform;filter:drop-shadow(0 3px 4px rgba(10,40,90,.25))';
    wrap.appendChild(img);box.appendChild(wrap);
    bs.push({w:wrap,i:img,size:size,x:opts.spread?80+Math.random()*(W-160):sx+(Math.random()-.5)*60,y:opts.spread?80+Math.random()*(H-160):sy+(Math.random()-.5)*40,ang:Math.random()*Math.PI*2,
      sp:26+Math.random()*22,pa:Math.random()*6.28,pb:Math.random()*6.28,fa:.35+Math.random()*.3,fb:.21+Math.random()*.2,
      fp:Math.random()*6.28,ff:.9+Math.random()*.4,delay:opts.spread?i*250:i*700});
  }
  var last=performance.now(),t0=last;
  function tick(now){
    var dt=Math.min(.05,(now-last)/1000);last=now;var t=(now-t0)/1000;
    if(!document.hidden){
      bs.forEach(function(b){
        if(now-t0<b.delay)return;b.w.style.opacity=1;
        var turn=Math.sin(t*b.fa+b.pa)*.7+Math.sin(t*b.fb+b.pb)*.5;
        var m=70,tx=0,steer=0;
        if(b.x<m||b.x>W-m||b.y<m||b.y>H-m){var want=Math.atan2(H/2-b.y,W/2-b.x),d=want-b.ang;d=Math.atan2(Math.sin(d),Math.cos(d));steer=d*1.6;}
        b.ang+=(turn*.9+steer)*dt;
        var spd=b.sp*(0.85+0.15*Math.sin(t*.9+b.pa));
        b.x+=Math.cos(b.ang)*spd*dt;b.y+=Math.sin(b.ang)*spd*dt;
        var flap=.62+.38*Math.cos(t*b.ff*2*Math.PI+b.fp);
        b.w.style.transform='translate('+(b.x-b.size/2).toFixed(1)+'px,'+(b.y-b.size/2).toFixed(1)+'px) rotate('+(b.ang+Math.PI/2).toFixed(3)+'rad)';
        b.i.style.transform='scaleX('+flap.toFixed(3)+')';
      });
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
};
})();
