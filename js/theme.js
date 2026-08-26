/* Theme toggle for eakansascity.org. The inline head snippet already set
   data-theme before first paint; this wires the button, persists an explicit
   choice, follows the system preference when no choice is saved, and keeps the
   Luma calendar embed on the matching theme. */
(function () {
  'use strict';
  var KEY = 'eakc-theme';
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function apply(t) {
    root.setAttribute('data-theme', t);
    var m = document.getElementById('meta-theme');
    if (m) m.setAttribute('content', t === 'dark' ? '#101214' : '#ffffff');
    var f = document.getElementById('luma-cal');
    if (f) {
      var want = 'lt=' + (t === 'dark' ? 'dark' : 'light');
      if (f.src.indexOf(want) === -1) f.src = f.src.replace(/lt=(light|dark)/, want);
    }
  }

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  var btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', function () {
    var t = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(KEY, t); } catch (e) {}
    apply(t);
  });

  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    var s = saved();
    if (s !== 'dark' && s !== 'light') apply(e.matches ? 'dark' : 'light');
  });
})();
