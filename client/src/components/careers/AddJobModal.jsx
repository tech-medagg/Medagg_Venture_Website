import React, { useState } from 'react';
import { X, PlusCircle, CheckCircle } from 'lucide-react';
import { addJob } from '../../services/jobsService';

export const AddJobModal = ({ isOpen, onClose, onJobAdded }) => {
  const [formData, setFormData] = useState({
    title: '',
    department: 'Advisory',
    location: 'Chennai / Hybrid',
    type: 'Full-time',
    experience: '3+ Years',
    shortDesc: '',
    fullDesc: '',
    requirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const updatedJobs = addJob(formData);
      setIsSubmitting(false);
      setSuccessMsg(true);

      if (onJobAdded) {
        onJobAdded(updatedJobs);
      }

      setTimeout(() => {
        setSuccessMsg(false);
        setFormData({
          title: '',
          department: 'Advisory',
          location: 'Chennai / Hybrid',
          type: 'Full-time',
          experience: '3+ Years',
          shortDesc: '',
          fullDesc: '',
          requirements: '',
        });
        onClose();
      }, 1200);
    }, 400);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(10, 17, 40, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '620px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 24px 48px rgba(0,0,0,0.2)',
          padding: '32px',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--color-text-muted)',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div style={{ marginBottom: '24px' }}>
          <span
            className="badge-tag"
            style={{ fontSize: '0.75rem', marginBottom: '8px', display: 'inline-block' }}
          >
            CAREER MANAGEMENT
          </span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-navy-dark)' }}>
            Post a New Job Opening
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
            Publish a new position live on the Medagg Careers page immediately.
          </p>
        </div>

        {successMsg ? (
          <div
            style={{
              padding: '24px',
              textAlign: 'center',
              backgroundColor: '#f0fdf4',
              borderRadius: '12px',
              border: '1px solid #bbf7d0',
              color: '#15803d',
            }}
          >
            <CheckCircle size={40} style={{ margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Job Posted Live!</h3>
            <p style={{ fontSize: '0.9rem', color: '#166534', marginTop: '4px' }}>
              The new job listing is now published on the Careers page.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                Job Title *
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="e.g. Senior Healthcare Operations Lead"
                value={formData.title}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="Advisory">Advisory</option>
                  <option value="Operations">Operations</option>
                  <option value="Transactions & Finance">Transactions & Finance</option>
                  <option value="Clinical Operations">Clinical Operations</option>
                  <option value="Technology & Data">Technology & Data</option>
                  <option value="Business Development">Business Development</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                  Job Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Retainer Advisory">Retainer Advisory</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Chennai / Hybrid"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                  Experience Required
                </label>
                <input
                  type="text"
                  name="experience"
                  placeholder="e.g. 4-8 Years"
                  value={formData.experience}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                Short Summary (Card Description) *
              </label>
              <input
                type="text"
                name="shortDesc"
                required
                placeholder="Brief 1-sentence summary of key responsibility"
                value={formData.shortDesc}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                Full Description *
              </label>
              <textarea
                name="fullDesc"
                required
                rows={3}
                placeholder="Detailed explanation of the role, responsibilities, and team context..."
                value={formData.fullDesc}
                onChange={handleChange}
                className="form-control"
                style={{ resize: 'vertical' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '6px' }}>
                Requirements (One requirement per line)
              </label>
              <textarea
                name="requirements"
                rows={3}
                placeholder="Master's in Hospital Administration or MHA&#10;5+ years experience in tertiary care&#10;Strong stakeholder presentation skills"
                value={formData.requirements}
                onChange={handleChange}
                className="form-control"
                style={{ resize: 'vertical' }}
              />
            </div>

            <div style={{ marginTop: '12px', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <PlusCircle size={18} />
                <span>{isSubmitting ? 'Publishing...' : 'Publish Job Live'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
