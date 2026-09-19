import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileNavDrawer } from './MobileNavDrawer';
import { TopBar } from './TopBar';
import { ScrollToTop } from '../common/ScrollToTop';

export const Layout = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [topbarHidden, setTopbarHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      // Hide topbar when scrolling down past 60px; reveal on scroll up
      if (current > lastScrollY.current && current > 60) {
        setTopbarHidden(true);
      } else {
        setTopbarHidden(false);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className={`site-wrapper${topbarHidden ? ' topbar-hidden' : ''}`}>
      <TopBar />
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
      <ScrollToTop />
    </div>
  );
};
