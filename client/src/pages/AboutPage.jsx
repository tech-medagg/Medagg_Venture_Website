import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/common/SectionHeading';
import { TeamMemberCard } from '../components/team/TeamMemberCard';
import { AdvisorCard } from '../components/team/AdvisorCard';
import { Modal } from '../components/common/Modal';
import { leadershipTeam, advisoryBoard } from '../data/teamData';
import { SEO } from '../components/common/SEO';
import {
  Flag,
  Settings,
  Users,
  Award,
  Target,
  Workflow,
  CheckCircle2,
} from 'lucide-react';

export const AboutPage = () => {
  const [selectedBio, setSelectedBio] = useState(null);

  const pillars = [
    {
      icon: Flag,
      title: 'Startup Friendly',
      desc: 'We encourage startups with free-flowing structures to innovate as we strive together to foster and nurture mutually beneficial ideas',
    },
    {
      icon: Settings,
      title: 'Operation-oriented',
      desc: 'Our practical approaches serve as robust business solutions through fruitful partnerships that enable improved visibility and capability',
    },
    {
      icon: Users,
      title: 'Non-corporate Mentality',
      desc: 'Our radiant philosophy is nowhere close to being self or company-serving as we strive to build a happy work culture',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Be the required redemption',
      desc: 'We help you place yourself in a profitable position as we ensure you have a firm grip over your goals and assets',
    },
    {
      icon: Target,
      title: 'Have a clear-cut concept',
      desc: 'We make sure you run your hospital at optimal capacity by employing our boutique suite of services and drive more revenue to your business',
    },
    {
      icon: Workflow,
      title: 'Promote structured processes',
      desc: 'We make you part of our network and rigorously define an end-to-end model to obtain well-defined outcomes in your organisation',
    },
  ];

  const strengths = [
    'Experienced clinicians',
    'Experience of over 20 years in industry',
    'Financial and strategic planning background',
  ];

  return (
    <div>
      <SEO
        title="About Us — Medagg Ventures Healthcare Advisory"
        description="Learn about Medagg Ventures — founded in 2018, we are India's leading healthcare consulting firm with 20+ years of industry experience. Meet our leadership team and advisory board."
        keywords="about Medagg Ventures, healthcare advisory firm India, hospital consulting leadership, healthcare consulting team India, Medagg story"
        canonical="/about"
      />
      {/* 1. HERO SECTION */}
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal-slide-left">
            <span className="page-hero-badge">COMPANY</span>
            <h1 className="page-hero-title">Our Story</h1>
            <p className="page-hero-desc">
              Medagg was founded in 2018 with the ambition to reshape how we think about healthcare. People first, business first and outcome-focussed.
            </p>
            <p className="page-hero-desc">
              We are a closely knit team of experts who have mastered the art of building the perfect healthcare experience by maintaining collaborative relationships with peers and clients through measurable outcomes.
            </p>
            <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              We're re-shaping the industry.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              WORK WITH US
            </Link>
          </div>

          <div className="page-hero-image-wrap reveal-slide-right delay-1">
            <img
              src="/assets/images/about/our_story.jpg"
              alt="Medagg Story"
              width="500"
              height="340"
              style={{ borderRadius: 'var(--radius-lg)', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* 2. THREE STORY PILLARS */}
      <section className="section section-white">
        <div className="container">
          <div className="grid grid-3" style={{ gap: '24px' }}>
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="feature-card">
                  <div className="feature-card-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="feature-card-title">{pillar.title}</h3>
                  <p className="feature-card-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OUR VALUES - THE MEDAGG MOTIVE */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">FOUNDATIONAL PRINCIPLES</span>
            <h2>Our Values - The Medagg Motive</h2>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="feature-card">
                  <div className="feature-card-icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="feature-card-title">{v.title}</h3>
                  <p className="feature-card-desc">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR STRENGTHS */}
      <section className="section section-white">
        <div className="container split-section">
          <div className="split-content reveal-slide-left">
            <span className="badge-tag">DISTINCT ADVANTAGES</span>
            <h2>Our Strengths</h2>
            <p className="lead">
              The growing Medagg team continues to work hand-in-hand with forward thinking organisations, developing best practice and making healthcare more accessible for everyone.
            </p>
            <p style={{ color: 'var(--color-text-body)', lineHeight: '1.7', margin: '16px 0' }}>
              With a history in driving business value through strategic planning and having worked for over 20 years in industry, our Managing Partner Ramesh Krishnan set out to establish a new precedence on service aggregation in the healthcare industry.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
              {strengths.map((st, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600, color: 'var(--color-text-heading)' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-brand-pink)' }} />
                  <span>{st}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="split-media-frame reveal-slide-right delay-1">
            <img
              src="/assets/images/about/our_strengths.jpg"
              alt="Medagg Team Strengths"
              width="600"
              height="420"
              style={{ borderRadius: 'var(--radius-lg)', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP TEAM (3D FLIP CARDS) */}
      <section className="section section-subtle" id="team">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">CORE LEADERSHIP</span>
            <h2>Our Dedicated Team</h2>
            <p className="lead">
              Each and every member plays a pivotal role in helping our team, agency, and clients grow
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {leadershipTeam.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onOpenBio={(m) => setSelectedBio(m)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. ADVISORY BOARD */}
      <section className="section section-white" id="advisors">
        <div className="container">
          <div className="section-header text-center reveal-on-scroll">
            <span className="badge-tag">ADVISORY BOARD</span>
            <h2>Our Advisors</h2>
            <p className="lead">
              Each and every member plays a pivotal role in helping our team, agency, and clients grow
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            {advisoryBoard.map((advisor) => (
              <AdvisorCard
                key={advisor.id}
                advisor={advisor}
                onOpenBio={(a) => setSelectedBio(a)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONVERSION BANNER */}
      <section className="section section-white">
        <div className="container">
          <div className="conversion-banner reveal-on-scroll">
            <h2 className="conversion-title">We believe in building bridges</h2>
            <p className="conversion-subtitle">
              Create an opportunity for your organization to engage itself in a collaborative environment
            </p>
            <div className="conversion-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                PARTNER WITH US
              </Link>
              <Link to="/strategic-consulting" className="btn btn-outline-white btn-lg">
                VIEW OUR SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BIO MODAL */}
      <Modal
        isOpen={Boolean(selectedBio)}
        onClose={() => setSelectedBio(null)}
        title={selectedBio?.name}
        subtitle={selectedBio?.role}
      >
        <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>{selectedBio?.bio}</p>
        {selectedBio?.experience && (
          <div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '8px', color: 'var(--color-text-heading)' }}>
              Key Experience & Highlights:
            </h4>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {selectedBio.experience.map((exp, idx) => (
                <li key={idx}>{exp}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
};
