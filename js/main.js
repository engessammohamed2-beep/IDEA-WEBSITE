document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.querySelector('.nav-toggle');
  var links=document.querySelector('.nav-links');
  if(toggle&&links){
    toggle.addEventListener('click',function(){
      links.classList.toggle('open');
      toggle.textContent=links.classList.contains('open')?'✕':'☰';
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){links.classList.remove('open');toggle.textContent='☰';});
    });
  }

  var counters=document.querySelectorAll('[data-count]');
  if(counters.length){
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          var el=e.target;
          var target=parseInt(el.getAttribute('data-count'),10);
          var suffix=el.getAttribute('data-suffix')||'';
          var dur=900,start=null;
          function step(ts){
            if(!start)start=ts;
            var p=Math.min((ts-start)/dur,1);
            el.textContent=Math.floor(p*target)+suffix;
            if(p<1)requestAnimationFrame(step);else el.textContent=target+suffix;
          }
          requestAnimationFrame(step);
          obs.unobserve(el);
        }
      });
    },{threshold:.4});
    counters.forEach(function(c){obs.observe(c);});
  }
});
