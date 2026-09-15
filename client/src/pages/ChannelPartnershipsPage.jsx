import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Eye, TrendingUp } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const ChannelPartnershipsPage = () => {
  const steps = [
    {
      step: 'Step 01',
      icon: Globe,
      title: 'Footprint expansion',
      desc: 'Reach customers in new neighborhoods across your city by capitalizing on the value that our network of healthcare experts and assets provides',
    },
    {
      step: 'Step 02',
      icon: Eye,
      title: 'Visibility improvement',
      desc: 'Bring about a system that is capable of providing improved quality of care and competent standard operating procedures',
    },
    {
      step: 'Step 03',
      icon: TrendingUp,
      title: 'Revenue increase',
      desc: 'Boost profits by creating an enriched patient experience by providing best-in-class clinical care at affordable costs and building strong customer loyalty, satisfaction and faith',
    },
  ];

  return (
    <div>
      <SEO
        title="Healthcare Channel Partnerships — Hospital Network Expansion"
        description="Medagg Ventures builds strategic channel partnerships for hospitals and healthcare organisations across India. We connect hospitals with the right partners to expand reach, grow referral networks, and improve patient acquisition."
        keywords="healthcare channel partnerships India, hospital network expansion, hospital referral network, healthcare distribution India, hospital dealer partnerships, Medagg channel partnerships, hospital marketing India"
        canonical="/services/channel-partnerships"
      />
      {/* 1. SERVICE HERO WITH FLOATING DUAL IMAGES */}
      <section className="service-hero-section">
        <div className="container service-hero-grid">
          <div className="reveal-slide-left">
            <span className="service-hero-tag">CHANNEL PARTNERSHIPS</span>
            <h1 className="service-hero-heading">
              Secure the<br />Right Partners
            </h1>
            <p className="service-hero-lead">
              Our top-of-the-line partnerships help you unlock value using medical aggregation as a main lever for the collective benefit of your business </p>
            <Link to="/contact" className="btn-gradient">
              PARTNER WITH US
            </Link>
          </div>

          <div className="reveal-slide-right delay-1">
            <div className="service-hero-media">
              <div className="service-hero-main-img">
                <img
                  src="/assets/images/services/cp_big_parallax.jpg"
                  alt="Channel Partnerships Leadership"
                />
              </div>
              <div className="service-hero-floating-img">
                <img
                  src="/assets/images/services/cp_small_parallax.jpg"
                  alt="Channel Partnerships Network"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW DOES IT WORK (3 STEPS) */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">PROCESS</span>
            <h2>How does it work?</h2>
            <p className="lead">
              As a leading channel partnership provider, we are actively involved in our partners' operations and don't just play the role of an intermediary            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="process-card">
                  <div className="process-card-header">
                    <span className="process-card-step">{item.step}</span>
                    <div className="process-card-icon">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="process-card-title">{item.title}</h3>
                  <p className="process-card-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES SECTION */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">CASE STUDIES</span>
            <h2>We work towards redefining India's healthcare spectrum</h2>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            <div className="case-study-card">
              <div
                className="case-study-img-wrap"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(10, 17, 40, 0.6), rgba(10, 17, 40, 0.9)), url('/assets/images/services/cp_small_parallax.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '24px',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                }}
              >
                <span className="case-study-tag">Channel Partnerships</span>
              </div>
              <div className="case-study-card-body" style={{ padding: '24px' }}>
                <h3 className="case-study-card-title">Regional Network Expansion</h3>
                <p className="case-study-card-desc">
                  Scale-up of clinical service providers into tier-2 & tier-3 healthcare markets.
                </p>
              </div>
            </div>

            <div className="case-study-card">
              <div
                className="case-study-img-wrap"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(10, 17, 40, 0.6), rgba(10, 17, 40, 0.9)), url('/assets/images/services/channel_partnerships_process.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '24px',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                }}
              >
                <span className="case-study-tag">Institutional Reach</span>
              </div>
              <div className="case-study-card-body" style={{ padding: '24px' }}>
                <h3 className="case-study-card-title">Doctor Community Outreach</h3>
                <p className="case-study-card-desc">
                  Structured channel distribution creating rapid patient referrals and institutional traction.
                </p>
              </div>
            </div>

            <div className="case-study-card">
              <div
                className="case-study-img-wrap"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(10, 17, 40, 0.6), rgba(10, 17, 40, 0.9)), url('/assets/images/home/consolidate_healthcare.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '24px',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                }}
              >
                <span className="case-study-tag">Market Growth</span>
              </div>
              <div className="case-study-card-body" style={{ padding: '24px' }}>
                <h3 className="case-study-card-title">Commercial Go-To-Market</h3>
                <p className="case-study-card-desc">
                  End-to-end commercial partnership structuring for diagnostic and specialized therapy providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONSULTING DESIGNED FOR YOUR BUSINESS BANNER */}
      <section className="section section-white">
        <div className="container">
          <div className="conversion-banner">
            <h2 className="conversion-title">Consulting designed for your<br />business</h2>
            <p className="conversion-subtitle">
              We don't just find a solution. We find THE SOLUTION.
            </p>
            <div className="conversion-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                PARTNER WITH US
              </Link>
              <Link to="/#services" className="btn btn-outline-white btn-lg">
                OR VIEW OTHER SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
