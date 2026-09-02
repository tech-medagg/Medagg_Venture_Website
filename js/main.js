/**
 * MedAgg Modern UI - Main Application Logic
 * Sticky Navigation, Mobile Drawer, 3D Card Tilt, 3D Card Flips, Scroll Animations & Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initScrollAnimations();
  initModals();
  initCardTilt();
  initCardFlip();
  highlightActiveNav();
});

/* 1. Header Sticky & Blur on Scroll */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* 2. Mobile Menu Toggle & Backdrop */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');

  if (!toggleBtn || !drawer || !backdrop) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    toggleBtn.classList.add('is-open');
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggleBtn.classList.remove('is-open');
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', closeMenu);

  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* 3. Enhanced Scroll Reveal (Fade, Zoom, Slide) */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-zoom, .reveal-slide-left, .reveal-slide-right');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

/* 4. 3D Card Tilt on Mouse Move (Desktop) */
function initCardTilt() {
  // Only enable on non-touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const tiltCards = document.querySelectorAll('.service-card, .portfolio-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* 5. 3D Card Flip for Team / Details */
function initCardFlip() {
  window.toggleCardFlip = (button) => {
    const container = button.closest('.team-card-flipper');
    if (container) {
      container.classList.toggle('is-flipped');
    }
  };
}

/* 6. Interactive Modals (for Team Bios, Openings & Case Studies) */
function initModals() {
  const modalOverlay = document.getElementById('global-modal');
  if (!modalOverlay) return;

  const modalTitle = modalOverlay.querySelector('.modal-title');
  const modalSubtitle = modalOverlay.querySelector('.modal-subtitle');
  const modalContent = modalOverlay.querySelector('.modal-content-area');
  const closeBtn = modalOverlay.querySelector('.modal-close-btn');

  const closeModal = () => {
    modalOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('is-active')) {
      closeModal();
    }
  });

  // Global helper to open modal
  window.openMedaggModal = (title, subtitle, htmlContent) => {
    if (modalTitle) modalTitle.textContent = title;
    if (modalSubtitle) modalSubtitle.textContent = subtitle;
    if (modalContent) modalContent.innerHTML = htmlContent;
    modalOverlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };
}

/* 7. Highlight Active Navigation Item */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link, .mobile-nav-link, .mobile-submenu-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('is-active');
      const parentDropdown = link.closest('.nav-item');
      if (parentDropdown) {
        const parentLink = parentDropdown.querySelector('.nav-link');
        if (parentLink) parentLink.classList.add('is-active');
      }
    }
  });
}
