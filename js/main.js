/* ==========================================================================
   STS Bornheim - Zentrale Interaktions-Logik (Vanilla ES6)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menü-Toggle (Burger)
  const menuBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // 2. Desktop Scroll-to-Top
  const scrollTopBtn = document.querySelector('.scroll-top-btn');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      // Nur auf Bildschirmen über 768px einblenden
      if (window.innerWidth > 768) {
        if (window.scrollY > 300) {
          scrollTopBtn.style.display = 'flex';
        } else {
          scrollTopBtn.style.display = 'none';
        }
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});