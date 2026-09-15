import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <Link to="/">
              <img
                src="/assets/images/medagg-logo-black.svg"
                alt="MedAgg Ventures"
                className="footer-logo"
                width="160"
                height="38"
              />
            </Link>
            <p className="footer-brand-desc">
              Medagg acts as an aggregator between various individual entities in the healthcare industry and helps them synergise their competencies to create a healthy tomorrow.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="footer-title">Company</h4>
            <div className="footer-links">
              <Link to="/about-us" className="footer-link">About Us</Link>
              <Link to="/careers" className="footer-link">Careers</Link>
              <Link to="/investments" className="footer-link">Strategic Investments</Link>
              <a
                href="https://www.medagg.com/blogs/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Blog
              </a>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="footer-title">Services</h4>
            <div className="footer-links">
              <Link to="/strategic-consulting" className="footer-link">Strategic Consulting</Link>
              <Link to="/transaction-advisory" className="footer-link">Transaction Advisory</Link>
              <Link to="/om-contracts" className="footer-link">O&M Contracts</Link>
              <Link to="/channel-partnerships" className="footer-link">Channel Partnerships</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-title">Contact</h4>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <a href="mailto:contact@medagg.com">contact@medagg.com</a>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <div>
                <a href="tel:+917506264440">+91 75062 64440</a><br />
                <a href="tel:+919962113344">+91 99621 13344</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-bottom-flex">
          <p style={{ margin: 0 }}>
            Copyright © 2023 Medagg Ventures LLP. All Rights Reserved.
          </p>
          <div className="footer-social-list">
            <a
              href="https://www.facebook.com/Medagg.ventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/medagg.ventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://in.linkedin.com/company/medagg-ventures-llp"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
