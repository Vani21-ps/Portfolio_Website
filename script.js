document.addEventListener("DOMContentLoaded", () => {
  feather.replace();

  /* =========================
     Hamburger Menu Toggle
  ========================= */
  const menuToggle = document.getElementById('menu-toggle') || document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');

  menuToggle?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  });

  overlay?.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    overlay.classList.add('hidden');
  });

  // Close mobile menu on link click
  const mobileLinks = document.querySelectorAll('#mobile-menu a.nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      overlay.classList.add('hidden');
    });
  });

  /* =========================
     Copy Email Button
  ========================= */
  const copyBtn = document.querySelector('.copy-email');
  copyBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('vanijain1982@yahoo.com');
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = 'Copy Email';
      }, 2000);
    } catch {
      alert('Failed to copy email.');
    }
  });

  /* =========================
     Prevent Demo Form Submit
  ========================= */
  const form = document.querySelector('form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message form submitted (demo only)');
    e.target.reset();
  });

  /* =========================
     Navbar Scroll Effect
  ========================= */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar?.classList.add('nav-scrolled');
    } else {
      navbar?.classList.remove('nav-scrolled');
    }
  });

  /* =========================
     Scroll-Based Nav Highlight
  ========================= */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('nav a.nav-link');

  function activateLink() {
    let index = sections.length;

    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) navLinks[index].classList.add('active');
  }

  activateLink();
  window.addEventListener('scroll', activateLink);
});
