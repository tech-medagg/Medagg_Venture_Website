import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, DollarSign, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const TransactionAdvisoryPage = () => {
  const steps = [
    {
      step: 'Step 01',
      icon: FileText,
      title: 'Collateral preparation',
      desc: 'Avert the possiblity of a poor sale result with our comprehensive positioning methods',
    },
    {
      step: 'Step 02',
      icon: DollarSign,
      title: 'Valuation and bid evaluation',
      desc: 'Get the best bids through our advanced valuation techniques and alternative transaction structure suggestions',
    },
    {
      step: 'Step 03',
      icon: CheckCircle2,
      title: 'Transaction closure',
      desc: 'Complete legal procedures and condition-predecents hassle-free as we are obliged to aid you with preparing definitive agreements and negotiating the same',
    },
  ];

  return (
    <div>
      <SEO
        title="Hospital Transaction Advisory — M&A & Valuation Services"
        description="Medagg Ventures offers expert transaction advisory for hospital mergers, acquisitions, and divestments. We help hospital owners and private equity investors with valuation, due diligence, and deal structuring across India."
        keywords="hospital mergers acquisitions India, healthcare transaction advisory, hospital valuation India, healthcare M&A advisory, hospital due diligence, hospital divestment advisory, Medagg transaction advisory"
        canonical="/services/transaction-advisory"
      />
      {/* 1. SERVICE HERO WITH FLOATING DUAL IMAGES */}
      <section className="service-hero-section">
        <div className="container service-hero-grid">
          <div className="reveal-slide-left">
            <span className="service-hero-tag">TRANSACTION ADVISORY</span>
            <h1 className="service-hero-heading">
              Big Impact for<br />Small Business
            </h1>
            <p className="service-hero-lead">
              Our boutique transaction advisory services come in to serve the hugely underserved market in the small/medium size hospital segment   </p>
            <Link to="/contact" className="btn-gradient">
              PARTNER WITH US
            </Link>
          </div>

          <div className="reveal-slide-right delay-1">
            <div className="service-hero-media">
              <div className="service-hero-main-img">
                <img
                  src="/assets/images/services/ta_big_parallax.jpg"
                  alt="Transaction Advisory Leadership"
                />
              </div>
              <div className="service-hero-floating-img">
                <img
                  src="/assets/images/services/ta_small_parallax.jpg"
                  alt="Transaction Advisory Deals"
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
              As a boutique transaction advisory firm in the healthcare space, our process offers major business impact even if you have a limited timeline or budget

            </p>
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
                    "linear-gradient(rgba(10, 17, 40, 0.6), rgba(10, 17, 40, 0.9)), url('/assets/images/services/ta_small_parallax.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '24px',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                }}
              >
                <span className="case-study-tag">Transaction Advisory</span>
              </div>
              <div className="case-study-card-body" style={{ padding: '24px' }}>
                <h3 className="case-study-card-title">Healthcare Valuation & M&A</h3>
                <p className="case-study-card-desc">
                  Strategic valuation and deal structuring for institutional clinical assets.
                </p>
              </div>
            </div>

            <div className="case-study-card">
              <div
                className="case-study-img-wrap"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(10, 17, 40, 0.6), rgba(10, 17, 40, 0.9)), url('/assets/images/services/transaction_advisory_process.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  padding: '24px',
                  minHeight: '160px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                }}
              >
                <span className="case-study-tag">Private Equity</span>
              </div>
              <div className="case-study-card-body" style={{ padding: '24px' }}>
                <h3 className="case-study-card-title">Fundraising & Growth Equity</h3>
                <p className="case-study-card-desc">
                  Comprehensive investor collateral and bid management for specialty hospital chains.
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
                <span className="case-study-tag">Divestment</span>
              </div>
              <div className="case-study-card-body" style={{ padding: '24px' }}>
                <h3 className="case-study-card-title">Asset Turnaround & Divestment</h3>
                <p className="case-study-card-desc">
                  Structured transaction closing and strategic partnerships with institutional health networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ADVISORY DESIGNED FOR YOUR BUSINESS BANNER */}
      <section className="section section-white">
        <div className="container">
          <div className="conversion-banner">
            <h2 className="conversion-title">Advisory designed for your<br />business</h2>
            <p className="conversion-subtitle">
              We don't just find a solution. We find THE SOLUTION.
            </p>
            <div className="conversion-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                PARTNER WITH US
              </Link>
              <Link to="/om-contracts" className="btn btn-outline-white btn-lg">
                NEXT SERVICE: O&M CONTRACTS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
