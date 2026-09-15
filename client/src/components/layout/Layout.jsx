import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileNavDrawer } from './MobileNavDrawer';

export const Layout = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();

  // Scroll to top automatically whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileNavOpen(false);

    // Trigger reveal classes if any observer is active
    const elements = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-zoom, .reveal-slide-left, .reveal-slide-right'
    );
    elements.forEach((el) => el.classList.add('is-revealed'));
  }, [location.pathname]);

  return (
    <div className="site-wrapper">
      <Header
        isMobileNavOpen={isMobileNavOpen}
        onToggleMobileNav={() => setIsMobileNavOpen((prev) => !prev)}
      />
      <MobileNavDrawer
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};
