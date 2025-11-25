// Navbar hamburger toggle (shared)
(function(){
  const navbar = document.getElementById('site-navbar');
  if(!navbar) return;
  const toggle = navbar.querySelector('.nav-toggle');
  const links = navbar.querySelector('.nav-links');
  if(!toggle || !links) return;

  function closeMenu(){
    navbar.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }
  toggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  links.addEventListener('click', (e) => {
    const target = e.target;
    if(target && target.tagName === 'A'){
      closeMenu();
    }
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeMenu();
  });
})();

// Carousel Logic
(function(){
  const carousel = document.querySelector('.carousel-container');
  if(!carousel) return;

  let slideIndex = 0;
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('.carousel-prev');
  const nextBtn = carousel.querySelector('.carousel-next');

  if(!slides.length || !prevBtn || !nextBtn) return;

  function showSlide(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
  });

  nextBtn.addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
  });
})();
