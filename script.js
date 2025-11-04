// script.js — small interactive touches
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Lightweight gallery lazy image switcher (optional)
  // If you want to dynamically populate gallery from images list, uncomment and edit below:
  /*
  const images = [
    'images/sunghoon1.jpg',
    'images/sunghoon2.jpg',
    'images/sunghoon3.jpg',
    'images/sunghoon4.jpg',
  ];
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  images.forEach((src, i) => {
    const fig = document.createElement('figure');
    fig.innerHTML = `<img src="${src}" alt="Sunghoon ${i+1}"><figcaption>Sunghoon ${i+1}</figcaption>`;
    grid.appendChild(fig);
  });
  */
});
