window.addEventListener('load',function(){if(window.startButterflies)window.startButterflies({base:'img/butterflies/'});});
document.querySelectorAll('[data-tabs]').forEach(function(w){var bs=w.querySelectorAll('.tabs button'),ps=w.querySelectorAll('[data-pane]');
function go(k){bs.forEach(function(b){b.classList.toggle('on',b.dataset.k===k)});ps.forEach(function(p){p.hidden=p.dataset.pane!==k});}
bs.forEach(function(b){b.onclick=function(){go(b.dataset.k)}});go(bs[0].dataset.k);});