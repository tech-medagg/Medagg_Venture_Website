import React from 'react';
import { SEO } from '../components/common/SEO';

export const DigitalMarketingPage = () => {
  return (
    <div>
      <SEO 
        title="Digital Marketing - MedAgg Ventures" 
        description="Comprehensive Digital Marketing solutions by MedAgg Ventures"
      />
      {/* Hero Section */}
      <section className="service-hero" style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
              Digital Marketing
            </h1>
            <p className="hero-subtitle" style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Empower your healthcare brand with data-driven digital strategies.
            </p>
          </div>
        </div>
      </section>
      
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Coming Soon</h2>
            <p style={{ color: '#555' }}>We are working on this page. Check back soon for details about our digital marketing services.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
