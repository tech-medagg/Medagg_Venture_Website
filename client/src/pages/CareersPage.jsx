import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/common/SectionHeading';
import { JobApplyModal } from '../components/careers/JobApplyModal';
import { jobsData } from '../data/jobsData';
import { SEO } from '../components/common/SEO';
import { MapPin, Briefcase, Clock, ArrowRight, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenJob = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const benefits = [
    'Work alongside senior healthcare CEOs and PE operating partners',
    'High ownership on critical hospital turnaround projects',
    'Meritocratic, non-corporate collaborative culture',
    'Competitive compensation with project milestone bonuses',
    'Rapid professional growth across consulting, operations, and M&A',
  ];

  return (
    <div>
      <SEO
        title="Careers at Medagg Ventures — Healthcare Consulting Jobs India"
        description="Join Medagg Ventures — India's leading healthcare consulting firm. We're hiring for healthcare consulting, hospital operations, M&A advisory, and strategy roles. Work alongside senior healthcare leaders and grow fast."
        keywords="healthcare consulting jobs India, hospital management jobs, healthcare advisory careers, hospital consulting careers India, Medagg careers, healthcare strategy jobs India, hospital operations jobs"
        canonical="/careers"
      />
      {/* 1. HERO */}
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div className="reveal-slide-left">
            <span className="page-hero-badge">CAREERS AT MEDAGG</span>
            <h1 className="page-hero-title">Help Shape the Future of Healthcare</h1>
            <p className="page-hero-desc">
              We look for passionate problem solvers, experienced clinicians, and sharp healthcare strategists. Work on high-impact hospital turnarounds and strategic healthtech investments.
            </p>
            <a href="#openings" className="btn btn-primary btn-lg">
              VIEW OPEN POSITIONS
            </a>
          </div>

          <div className="page-hero-image-wrap reveal-slide-right delay-1">
            <img
              src="/assets/images/careers_img1.jpg"
              alt="Medagg Team Culture"
              width="500"
              height="340"
              style={{ borderRadius: 'var(--radius-lg)', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* 2. CULTURE & EMPOWERMENT */}
      <section className="section section-white">
        <div className="container split-section">
          <div className="split-content">
            <span className="badge-tag">EMPOWERMENT & CULTURE</span>
            <h2>Feel you can do and earn more?</h2>
            <p className="lead">
              Are you a high-quality, multitasking project manager or good in operations, maybe a niche expert? We've created a business that champions flexibility and personal support, the fundamental underpinnings of a resilient team.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0' }}>
              {benefits.map((b, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-brand-pink)' }} />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="btn btn-secondary">
              GET IN TOUCH
            </Link>
          </div>

          <div className="split-media-frame">
            <img
              src="/assets/images/careers_img2.jpg"
              alt="Medagg Work Culture"
              width="600"
              height="420"
              style={{ borderRadius: 'var(--radius-lg)', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* 3. AVAILABLE OPENINGS */}
      <section className="section section-subtle" id="openings">
        <div className="container">
          <SectionHeading
            badge="OPPORTUNITIES"
            title="Available Openings"
            subtitle="Join our team of healthcare strategists, operational leaders, and clinical consultants."
          />

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {jobsData.map((job) => (
              <div
                key={job.id}
                className="feature-card"
                style={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '12px',
                    }}
                  >
                    <span className="badge-tag" style={{ fontSize: '0.75rem' }}>
                      {job.department}
                    </span>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--color-text-muted)',
                        fontWeight: 600,
                      }}
                    >
                      {job.type}
                    </span>
                  </div>

                  <h3 className="feature-card-title">{job.title}</h3>
                  <p className="feature-card-desc">{job.shortDesc}</p>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                      marginTop: '16px',
                      fontSize: '0.85rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} />
                      <span>{job.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '24px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => handleOpenJob(job)}
                    style={{ width: '100%' }}
                  >
                    View Job & Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALWAYS ON THE LOOKOUT BANNER */}
      <section className="section section-white">
        <div className="container">
          <div className="conversion-banner">
            <h2 className="conversion-title">We’re always on the lookout</h2>
            <p className="conversion-subtitle">
              Don’t see your exact role listed? Send us your CV or LinkedIn profile link and we’ll reach out when an aligned mandate opens up.
            </p>
            <div className="conversion-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                SUBMIT PROFILE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JOB DETAILS & APPLICATION MODAL */}
      <JobApplyModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedJob(null);
        }}
      />
    </div>
  );
};
