window.ICON_PATHS = {
  lifecycle: '<path d="M4 4v5h5M20 20v-5h-5M5 9a7 7 0 0 1 12-3l3 3M19 15a7 7 0 0 1-12 3l-3-3"/>',
  headset: '<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><path d="M4 13h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4v-5ZM20 13h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2v-5Z"/><path d="M18 18v1a2 2 0 0 1-2 2h-3"/>',
  trending: '<path d="M4 17l5-5 4 4 7-7"/><path d="M15 9h5v5"/>',
  box: '<path d="M4 8l8-4 8 4-8 4-8-4Z"/><path d="M4 8v8l8 4 8-4V8"/><path d="M12 12v8"/>',
  refresh: '<path d="M4 4v5h5"/><path d="M20 20v-5h-5"/><path d="M5.5 9A7 7 0 0 1 19 12"/><path d="M18.5 15A7 7 0 0 1 5 12"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  coffee: '<path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z"/><path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M7 3c0 1-1 1-1 2M11 3c0 1-1 1-1 2"/>',
  shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/>',
  image: '<rect x="3" y="4" width="18" height="14" rx="1.5"/><circle cx="8.5" cy="9" r="1.5"/><path d="M21 15l-5-5-4 4-2-2-6 6"/>',
  plexi: '<path d="M4 6h4v2h8V6h4M6 8v9m12-9v9M4 19h16"/>',
  live: '<rect x="4" y="6" width="16" height="11" rx="1.5"/><path d="M9 10.5h6M9 13.5h4"/><path d="M9 20h6"/>',
  control: '<rect x="3" y="5" width="8" height="6" rx="1"/><rect x="13" y="5" width="8" height="6" rx="1"/><path d="M4 19c1-3 3-4 8-4s7 1 8 4"/>',
  video4k: '<rect x="3" y="5" width="18" height="13" rx="1.5"/><path d="M8 9v5M8 9l3 5M11 9v5"/><path d="M15 9v5h3"/>',
  broadcast: '<path d="M12 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/><path d="M8.5 9.5a5 5 0 0 0 0 7M15.5 9.5a5 5 0 0 1 0 7M6 7a9 9 0 0 0 0 12M18 7a9 9 0 0 1 0 12"/>',
  code: '<path d="M9 8l-5 4 5 4M15 8l5 4-5 4M13 6l-2 12"/>',
  pencil: '<path d="M4 20l1-4L16 5l3 3L8 19l-4 1Z"/><path d="M14 7l3 3"/>',
  cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>',
  printer: '<path d="M6 9V4h12v5"/><rect x="4" y="9" width="16" height="7" rx="1.5"/><path d="M6 14h12v6H6v-6Z"/>',
  megaphone: '<path d="M4 10v4h3l6 4V6l-6 4H4Z"/><path d="M15 9a4 4 0 0 1 0 6M18 7a7.5 7.5 0 0 1 0 10"/>',
  heart: '<path d="M12 20s-7-4.35-9.5-8.5C.8 8 2.5 4.5 6 4.5c2 0 3.5 1.2 4 2.5.5-1.3 2-2.5 4-2.5 3.5 0 5.2 3.5 3.5 7C19 15.65 12 20 12 20Z"/>',
  search: '<circle cx="10" cy="10" r="6"/><path d="M20 20l-5.5-5.5"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/>'
};
window.iconSvg = function (name) {
  var p = window.ICON_PATHS[name] || window.ICON_PATHS.spark;
  return '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px">' + p + '</svg>';
};
