import React from 'react';
import { Link } from 'react-router-dom';

export const ServiceHero = ({ title, subtitle, badge = 'OUR EXPERTISE', heroImage, ctaText = 'CONSULT WITH MEDAGG' }) => {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div className="reveal-slide-left">
          <span className="page-hero-badge">{badge}</span>
          <h1 className="page-hero-title">{title}</h1>
          <p className="page-hero-desc">{subtitle}</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            {ctaText}
          </Link>
        </div>

        {heroImage && (
          <div className="page-hero-image-wrap reveal-slide-right delay-1">
            <img
              src={heroImage}
              alt={title}
              width="500"
              height="320"
              style={{ borderRadius: 'var(--radius-lg)', objectFit: 'cover' }}
            />
          </div>
        )}
      </div>
    </section>
  );
};
