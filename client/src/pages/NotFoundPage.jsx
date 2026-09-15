import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <section className="section section-white" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span
          style={{
            fontSize: '5rem',
            fontWeight: 900,
            color: 'var(--color-brand-pink)',
            fontFamily: 'var(--font-heading)',
            display: 'block',
            lineHeight: 1,
            marginBottom: '16px',
          }}
        >
          404
        </span>
        <h1 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-text-heading)' }}>
          Page Not Found
        </h1>
        <p className="lead" style={{ maxWidth: '500px', margin: '0 auto 32px auto' }}>
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <Home size={18} />
          <span>RETURN TO HOME</span>
        </Link>
      </div>
    </section>
  );
};
