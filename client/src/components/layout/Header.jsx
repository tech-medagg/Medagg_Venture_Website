import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Header = ({ onToggleMobileNav, isMobileNavOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCompanyActive = location.pathname === '/about-us' || location.pathname === '/about' || location.pathname === '/careers';
  const isServicesActive = [
    '/strategic-consulting',
    '/transaction-advisory',
    '/om-contracts',
    '/channel-partnerships',
    '/services/strategic-consulting',
    '/services/transaction-advisory',
    '/services/om-contracts',
    '/services/channel-partnerships',
  ].includes(location.pathname);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="site-header">
      <div className="container header-container">
        <Link to="/" className="site-logo" aria-label="MedAgg Ventures Home">
          <img
            src="/assets/images/medagg-logo-black.svg"
            alt="MedAgg Ventures Logo"
            width="160"
            height="90"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <ul className="nav-list">
            {/* Company Dropdown */}
            <li className="nav-item">
              <span
                className={`nav-link ${isCompanyActive ? 'is-active active' : ''}`}
                aria-haspopup="true"
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <span>COMPANY</span>
                <ChevronDown size={14} className="nav-link-icon" />
              </span>
              <ul className="nav-dropdown" aria-label="Company Submenu">
                <li>
                  <NavLink to="/about-us" className="dropdown-link">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/careers" className="dropdown-link">
                    Careers
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item">
              <span
                className={`nav-link ${isServicesActive ? 'is-active active' : ''}`}
                aria-haspopup="true"
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <span>SERVICES</span>
                <ChevronDown size={14} className="nav-link-icon" />
              </span>
              <ul className="nav-dropdown" aria-label="Services Submenu">
                <li>
                  <NavLink to="/strategic-consulting" className="dropdown-link">
                    Strategic Consulting
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/transaction-advisory" className="dropdown-link">
                    Transaction Advisory
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/om-contracts" className="dropdown-link">
                    O&M Contracts
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/channel-partnerships" className="dropdown-link">
                    Channel Partnerships
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/digital-marketing" className={({ isActive }) => `nav-link ${isActive ? 'is-active active' : ''}`}>
                DIGITAL MARKETING
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/investments" className={({ isActive }) => `nav-link ${isActive ? 'is-active active' : ''}`}>
                STRATEGIC INVESTMENTS
              </NavLink>
            </li>

            {/* BLOG link — hidden for now
            <li className="nav-item">
              <a
                href="https://www.medagg.com/blogs/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                BLOG
              </a>
            </li>
            */}

            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'is-active active' : ''}`}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Header Actions: Get in Touch + Mobile Menu Toggle */}
        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary btn-sm header-get-in-touch-btn">
            GET IN TOUCH
          </Link>

          <button
            type="button"
            className={`mobile-nav-toggle ${isMobileNavOpen ? 'is-open' : ''}`}
            onClick={onToggleMobileNav}
            aria-label="Toggle Navigation Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
