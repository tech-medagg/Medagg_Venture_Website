import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { submitApplication } from '../../services/api';
import { Send, CheckCircle2, AlertCircle, Loader2, ArrowLeft, MapPin } from 'lucide-react';

const LANGUAGES = [
  'English', 'Hindi', 'Tamil', 'Telugu',
  'Kannada', 'Malayalam', 'Marathi', 'Bengali',
];

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  fontSize: '0.925rem',
  borderRadius: '8px',
  border: '1.5px solid #E2E8F0',
  background: '#F8FAFC',
  outline: 'none',
  transition: 'all 0.25s ease',
  fontFamily: 'inherit',
};

const labelStyle = {
  fontSize: '0.85rem',
  fontWeight: 600,
  marginBottom: '6px',
  display: 'block',
  color: '#0F1D40',
};

export const JobApplyModal = ({ job, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    experience: '',
    location: '',
    linkedin_url: '',
    cover_note: '',
    languages: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isApplyMode, setIsApplyMode] = useState(false);

  if (!job) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageToggle = (lang) => {
    setFormData((prev) => {
      const already = prev.languages.includes(lang);
      return {
        ...prev,
        languages: already
          ? prev.languages.filter((l) => l !== lang)
          : [...prev.languages, lang],
      };
    });
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    if (!formData.from_name.trim() || !formData.from_email.trim() || !formData.phone.trim()) {
      setStatusMessage({ type: 'error', text: 'Please fill in your name, email, and phone number.' });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const payload = {
        ...formData,
        jobRole: job.title,
        languages: formData.languages.length > 0 ? formData.languages.join(', ') : 'Not specified',
      };
      const response = await submitApplication(payload);
      setStatusMessage({ type: 'success', text: response.message || 'Application submitted successfully! Our talent team will review your profile.' });
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        experience: '',
        location: '',
        linkedin_url: '',
        cover_note: '',
        languages: [],
      });
    } catch (err) {
      setStatusMessage({ type: 'error', text: err.message || 'Failed to submit application. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsApplyMode(false);
    setStatusMessage(null);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={job.title}
      subtitle={`${job.department} · ${job.experience} · ${job.location}`}
    >
      {!isApplyMode ? (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          <div style={{ marginBottom: '18px' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-heading)', marginBottom: '8px' }}>
              Role Overview
            </h4>
            <p style={{ lineHeight: '1.65', color: 'var(--color-text-body)', fontSize: '0.95rem' }}>{job.fullDesc}</p>
          </div>

          {job.requirements && job.requirements.length > 0 && (
            <div style={{ marginBottom: '22px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-heading)', marginBottom: '8px' }}>
                Key Qualifications & Expectations
              </h4>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {job.requirements.map((req, idx) => (
                  <li key={idx} style={{ color: 'var(--color-text-body)', fontSize: '0.925rem', lineHeight: '1.5' }}>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ marginTop: '24px' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setIsApplyMode(true)}
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.04em',
                boxShadow: '0 6px 18px rgba(235, 36, 107, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <span>APPLY FOR THIS ROLE</span>
              <Send size={16} />
            </button>
          </div>
        </div>
      ) : (
        <div style={{ animation: 'fadeIn 0.3s ease' }}>
          {statusMessage && (
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: statusMessage.type === 'success' ? '#ECFDF5' : '#FEF2F2',
                border: `1px solid ${statusMessage.type === 'success' ? '#10B981' : '#EF4444'}`,
                color: statusMessage.type === 'success' ? '#065F46' : '#991B1B',
                fontSize: '0.9rem',
              }}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 size={18} style={{ color: '#10B981', flexShrink: 0 }} />
              ) : (
                <AlertCircle size={18} style={{ color: '#EF4444', flexShrink: 0 }} />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {statusMessage?.type === 'success' ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#ECFDF5',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--color-text-heading)' }}>
                Application Received!
              </h4>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', fontSize: '0.925rem' }}>
                Thank you for your interest in Medagg Ventures. Our leadership team will review your credentials.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
                style={{ borderRadius: '8px', padding: '10px 24px' }}
              >
                Close Dialog
              </button>
            </div>
          ) : (
            <form onSubmit={handleApplySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {/* Full Name */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label style={labelStyle}>
                  Full Name <span style={{ color: 'var(--color-brand-pink)' }}>*</span>
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  style={inputStyle}
                  required
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-2" style={{ gap: '14px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label style={labelStyle}>
                    Email Address <span style={{ color: 'var(--color-brand-pink)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    style={inputStyle}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label style={labelStyle}>
                    Phone Number <span style={{ color: 'var(--color-brand-pink)' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91..."
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              {/* Experience & Location */}
              <div className="grid grid-2" style={{ gap: '14px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label style={labelStyle}>Years of Experience</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g. 6 years"
                    style={inputStyle}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label style={labelStyle}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <MapPin size={13} style={{ color: 'var(--color-brand-pink)' }} />
                      Current Location
                    </span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Chennai, Tamil Nadu"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* LinkedIn */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label style={labelStyle}>LinkedIn Profile URL</label>
                <input
                  type="url"
                  name="linkedin_url"
                  value={formData.linkedin_url}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/..."
                  style={inputStyle}
                />
              </div>

              {/* Languages Known */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label style={labelStyle}>Languages Known</label>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1.5px solid #E2E8F0',
                    background: '#F8FAFC',
                  }}
                >
                  {LANGUAGES.map((lang) => {
                    const checked = formData.languages.includes(lang);
                    return (
                      <label
                        key={lang}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          cursor: 'pointer',
                          padding: '5px 10px',
                          borderRadius: '6px',
                          background: checked ? 'rgba(235, 36, 107, 0.08)' : 'transparent',
                          border: checked ? '1px solid rgba(235, 36, 107, 0.3)' : '1px solid transparent',
                          transition: 'all 0.2s ease',
                          fontSize: '0.875rem',
                          fontWeight: checked ? 600 : 400,
                          color: checked ? 'var(--color-brand-pink)' : 'var(--color-text-body)',
                          userSelect: 'none',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleLanguageToggle(lang)}
                          style={{ accentColor: 'var(--color-brand-pink)', width: '14px', height: '14px' }}
                        />
                        {lang}
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Cover Note */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label style={labelStyle}>Brief Cover Note / Highlights</label>
                <textarea
                  name="cover_note"
                  rows={3}
                  value={formData.cover_note}
                  onChange={handleChange}
                  placeholder="Share a short summary of your healthcare consulting or operational achievements..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsApplyMode(false)}
                  style={{
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'var(--color-navy-900)',
                    color: '#FFFFFF',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <ArrowLeft size={16} />
                  <span>BACK</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    letterSpacing: '0.04em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'var(--color-brand-pink)',
                    color: '#FFFFFF',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 14px rgba(235, 36, 107, 0.35)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>SUBMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>SUBMIT APPLICATION</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </Modal>
  );
};
