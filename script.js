document.addEventListener("DOMContentLoaded", () => {
  feather.replace();

  // Custom Cursor
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");

  let posX = window.innerWidth / 2;
  let posY = window.innerHeight / 2;
  let currentX = posX;
  let currentY = posY;

  document.body.style.cursor = "none";

  document.addEventListener("mousemove", (e) => {
    posX = e.clientX;
    posY = e.clientY;
    cursor.style.transform = `translate(${posX}px, ${posY}px)`;
  });

  function animateFollower() {
    currentX += (posX - currentX) * 0.1;
    currentY += (posY - currentY) * 0.1;
    follower.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  [cursor, follower].forEach(el => {
    el.style.pointerEvents = "none";
    el.style.zIndex = "9999";
    el.style.position = "fixed";
  });

  const hoverables = document.querySelectorAll('button, a.nav-link, a[href^="mailto"], a[href^="http"]');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      follower.style.width = '48px';
      follower.style.height = '48px';
      follower.style.backgroundColor = 'rgba(255, 193, 7, 0.6)';
    });
    el.addEventListener('mouseleave', () => {
      follower.style.width = '32px';
      follower.style.height = '32px';
      follower.style.backgroundColor = 'rgba(255, 193, 7, 0.3)';
    });
  });

  // Hamburger Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');

  menuToggle?.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('scale-100');
    mobileMenu.classList.toggle('scale-0', !isOpen);
    mobileMenu.classList.toggle('scale-100', isOpen);
    overlay.classList.toggle('hidden', !isOpen);
  });

  // Close mobile menu on nav link click
  const mobileLinks = document.querySelectorAll('#mobile-menu a.nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('scale-0');
      mobileMenu.classList.remove('scale-100');
      overlay.classList.add('hidden');
    });
  });

  // Overlay close on outside click (optional)
  overlay.addEventListener('click', () => {
    mobileMenu.classList.add('scale-0');
    mobileMenu.classList.remove('scale-100');
    overlay.classList.add('hidden');
  });

  // Email Copy Function
  const copyBtn = document.querySelector('.copy-email');
  copyBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('vanijain1982@yahoo.com');
      copyBtn.innerHTML = 'Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" viewBox="0 0 24 24">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>`;
      }, 2000);
    } catch {
      alert('Failed to copy email.');
    }
  });

  // Prevent demo form from submitting
  const form = document.querySelector('form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message form submitted. (This is a demo, no actual message sent)');
    e.target.reset();
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });

  // Scroll-based nav link highlight
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

  // Resize reset for cursor tracking
  window.addEventListener('resize', () => {
    posX = window.innerWidth / 2;
    posY = window.innerHeight / 2;
  });
});
