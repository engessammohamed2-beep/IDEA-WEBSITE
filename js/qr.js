/* Local QR generation (no external service). window.qrDataUrl(text, px) -> PNG data URL */
window.qrDataUrl=function(text,px){
  var qr=qrcode(0,'M');qr.addData(String(text));qr.make();
  var n=qr.getModuleCount(),q=4,cell=Math.max(2,Math.ceil((px||300)/(n+q*2))),size=(n+q*2)*cell;
  var c=document.createElement('canvas');c.width=c.height=size;var x=c.getContext('2d');
  x.fillStyle='#fff';x.fillRect(0,0,size,size);x.fillStyle='#000';
  for(var r=0;r<n;r++)for(var k=0;k<n;k++)if(qr.isDark(r,k))x.fillRect((k+q)*cell,(r+q)*cell,cell,cell);
  return c.toDataURL('image/png');
};
