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
