const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
}

const count = document.querySelector('.filter-count');
document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    const f = btn.dataset.filter;
    let shown = 0;
    document.querySelectorAll('.project-card').forEach(card => {
      const tags = (card.dataset.tags || '').split(' ');
      const match = f === 'all' || tags.includes(f);
      card.hidden = !match;
      if (match) shown++;
    });
    if (count) count.textContent = shown + (shown === 1 ? ' project' : ' projects');
  });
});
