
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');

  document.querySelectorAll('[data-toggle-theme]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const isDark = root.classList.contains('dark');
      if(isDark){ root.classList.remove('dark'); localStorage.setItem('theme','light'); btn.textContent='🌙'; }
      else{ root.classList.add('dark'); localStorage.setItem('theme','dark'); btn.textContent='☀️'; }
    });
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  document.querySelectorAll('.thumb').forEach(t => {
    t.addEventListener('click', ()=>{
      const src = t.getAttribute('data-full');
      lightboxImg.src = src;
      lightbox.classList.add('open');
    });
  });
  lightbox.addEventListener('click', (e)=>{
    if(e.target.id === 'lightbox' || e.target.id === 'lightbox-img') {
      lightbox.classList.remove('open');
      lightboxImg.src='';
    }
  });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') lightbox.classList.remove('open'); });

  // fill years
  document.addEventListener('DOMContentLoaded', ()=>{
    const y = new Date().getFullYear();
    document.querySelectorAll('[data-year]').forEach(el=>el.textContent = y);
  });
})();
