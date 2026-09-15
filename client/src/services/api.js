/**
 * Medagg Ventures — Email Submission Service (EmailJS)
 * Frontend-only. No backend or server required.
 *
 * Emails are delivered to:
 *   → karankinger@medagghealthcare.com
 *   → medagghealthcareweb@gmail.com
 */

import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './emailConfig';
import { sendLeadToTeleCRM } from './telecrm';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Check if EmailJS has been configured with real credentials.
 */
const isConfigured = () =>
  EMAILJS_CONFIG.SERVICE_ID &&
  EMAILJS_CONFIG.SERVICE_ID !== 'your_service_id_here' &&
  EMAILJS_CONFIG.PUBLIC_KEY &&
  EMAILJS_CONFIG.PUBLIC_KEY !== 'your_public_key_here';

/**
 * Submit a contact/inquiry form via EmailJS & TeleCRM Async API.
 * Template variables: from_name, from_email, phone, service, message, to_email
 */
export const submitInquiry = async (formData) => {
  // Push lead to TeleCRM Async API
  sendLeadToTeleCRM({
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    message: formData.message,
    service: formData.service || 'Contact Page Inquiry',
  }).catch((err) => console.error('[TeleCRM Ingestion Error]:', err));

  if (!isConfigured()) {
    // Fallback mock when EmailJS is not yet configured
    console.warn('[Medagg] EmailJS not configured. Using mock. See client/src/services/emailConfig.js for setup.');
    await delay(1200);
    if (import.meta.env.DEV) {
      console.log('[Medagg] Contact Form Data:', formData);
    }
    return {
      success: true,
      message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
    };
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    service: formData.service || 'General Inquiry',
    message: formData.message || 'No additional message provided.',
    to_email: EMAILJS_CONFIG.TO_EMAIL_CONTACT,   // → karankinger@medagghealthcare.com
    reply_to: formData.email,
  };

  await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );

  return {
    success: true,
    message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
  };
};

/**
 * Submit a job application via EmailJS.
 * Template variables: job_role, from_name, from_email, phone, experience, linkedin_url, cover_note, to_email
 */
export const submitApplication = async (formData) => {
  // Push application lead to TeleCRM Async API
  sendLeadToTeleCRM({
    name: formData.from_name,
    phone: formData.phone,
    email: formData.from_email,
    message: `Career Application: ${formData.jobRole || 'General'}. Exp: ${formData.experience || 'N/A'}. LinkedIn: ${formData.linkedin_url || 'N/A'}. Note: ${formData.cover_note || 'N/A'}`,
    service: `Career Application - ${formData.jobRole || 'General'}`,
  }).catch((err) => console.error('[TeleCRM Career Lead Ingestion Error]:', err));

  if (!isConfigured()) {
    // Fallback mock when EmailJS is not yet configured
    console.warn('[Medagg] EmailJS not configured. Using mock. See client/src/services/emailConfig.js for setup.');
    await delay(1400);
    if (import.meta.env.DEV) {
      console.log('[Medagg] Job Application Data:', formData);
    }
    return {
      success: true,
      message: 'Application submitted successfully! Our talent team will review your profile.',
    };
  }

  const templateParams = {
    job_role: formData.jobRole,
    from_name: formData.from_name,
    from_email: formData.from_email,
    phone: formData.phone,
    experience: formData.experience || 'Not specified',
    location: formData.location || 'Not specified',
    linkedin_url: formData.linkedin_url || 'Not provided',
    languages: formData.languages || 'Not specified',
    cover_note: formData.cover_note || 'No cover note provided.',
    to_email: EMAILJS_CONFIG.TO_EMAIL_HIRING,    // → medagghealthcareweb@gmail.com
    reply_to: formData.from_email,
  };

  await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.CAREERS_TEMPLATE_ID,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );

  return {
    success: true,
    message: 'Application submitted successfully! Our talent team will review your profile.',
  };
};

export const checkHealth = async () => {
  return {
    status: 'ok',
    mode: 'frontend-only',
    emailConfigured: isConfigured(),
  };
};
