import React, { useState } from 'react';
import { submitInquiry } from '../../services/api';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your mobile number';
    } else {
      const digits = formData.phone.replace(/\D/g, '');
      const isValid =
        digits.length === 10 ||
        (digits.length === 12 && digits.startsWith('91')) ||
        (digits.length === 11 && digits.startsWith('0'));
      if (!isValid) errs.phone = 'Please enter a valid Indian mobile number (10 digits)';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || 'No additional message provided',
        service: 'Contact Page Inquiry',
      });
      setStatusMessage({
        type: 'success',
        text: response.message || 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Failed to submit inquiry. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {statusMessage && (
        <div
          style={{
            padding: '14px 18px',
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: statusMessage.type === 'success' ? '#ECFDF5' : '#FEF2F2',
            border: `1px solid ${statusMessage.type === 'success' ? '#10B981' : '#EF4444'}`,
            color: statusMessage.type === 'success' ? '#065F46' : '#991B1B',
            fontSize: '0.925rem',
          }}
        >
          {statusMessage.type === 'success' ? (
            <CheckCircle2 size={20} style={{ flexShrink: 0, color: '#10B981' }} />
          ) : (
            <AlertCircle size={20} style={{ flexShrink: 0, color: '#EF4444' }} />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Full Name */}
      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label
          htmlFor="contact-name"
          className="form-label"
          style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#0F1D40',
            marginBottom: '8px',
          }}
        >
          Full Name *
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '0.95rem',
            borderRadius: '8px',
            border: errors.name ? '1px solid #EF4444' : '1px solid #E2E8F0',
            background: '#F8FAFC',
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          required
        />
        {errors.name && (
          <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
            {errors.name}
          </span>
        )}
      </div>

      {/* Email Address */}
      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label
          htmlFor="contact-email"
          className="form-label"
          style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#0F1D40',
            marginBottom: '8px',
          }}
        >
          Email Address *
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="name@company.com"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '0.95rem',
            borderRadius: '8px',
            border: errors.email ? '1px solid #EF4444' : '1px solid #E2E8F0',
            background: '#F8FAFC',
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          required
        />
        {errors.email && (
          <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
            {errors.email}
          </span>
        )}
      </div>

      {/* Mobile Number */}
      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label
          htmlFor="contact-phone"
          className="form-label"
          style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#0F1D40',
            marginBottom: '8px',
          }}
        >
          Mobile Number *
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g. 9876543210"
          maxLength={14}
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '0.95rem',
            borderRadius: '8px',
            border: errors.phone ? '1px solid #EF4444' : '1px solid #E2E8F0',
            background: '#F8FAFC',
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          required
        />
        {errors.phone && (
          <span style={{ color: '#EF4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
            {errors.phone}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="form-group" style={{ marginBottom: '24px' }}>
        <label
          htmlFor="contact-message"
          className="form-label"
          style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#0F1D40',
            marginBottom: '8px',
          }}
        >
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="How can Medagg assist your healthcare business?"
          className="form-control"
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '0.95rem',
            borderRadius: '8px',
            border: '1px solid #E2E8F0',
            background: '#F8FAFC',
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'inherit',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary"
        style={{
          width: '100%',
          padding: '14px 24px',
          background: 'var(--color-brand-pink)',
          color: '#FFFFFF',
          borderRadius: '8px',
          fontWeight: 700,
          fontSize: '0.95rem',
          letterSpacing: '0.04em',
          border: 'none',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          boxShadow: '0 4px 14px rgba(235, 36, 107, 0.35)',
          transition: 'all 0.3s ease',
        }}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>SUBMITTING...</span>
          </>
        ) : (
          <>
            <span>SUBMIT</span>
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
};
