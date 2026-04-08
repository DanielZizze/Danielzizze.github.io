/* ═══════════════════════════════════
   lezioni.js — tab switching for lezioni.html
═══════════════════════════════════ */

const tabBtns = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.topic-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.prof;

    tabBtns.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    const panel = document.getElementById('panel-' + target);
    if (panel) {
      panel.classList.add('active');
      // re-trigger card animations
      panel.querySelectorAll('.card').forEach((c, i) => {
        c.style.animation = 'none';
        c.offsetHeight; // reflow
        c.style.animation = '';
        c.style.animationDelay = `${0.05 + i * 0.07}s`;
      });
    }
  });
});