// Responsive Navbar Toggle Script

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navClickables = document.querySelectorAll('.nav-link, .btn-nav');

  if (!navToggle || !navMenu) return;

  // Toggle mobile
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu 
  navClickables.forEach(item => {
    item.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });


  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});
