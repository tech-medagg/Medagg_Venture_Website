/**
 * EmailJS Configuration — Medagg Ventures
 *
 * HOW TO SET UP (takes ~2 minutes):
 * ─────────────────────────────────────────────────────────────────
 * 1. Go to https://www.emailjs.com/ and sign up with:
 *       medagghealthcareweb@gmail.com
 *
 * 2. Add an Email Service:
 *       Dashboard → Email Services → Add New Service → Gmail
 *       Connect medagghealthcareweb@gmail.com
 *       Copy the "Service ID" → paste below as VITE_EMAILJS_SERVICE_ID
 *
 * 3. Create a Contact Form Template:
 *       Dashboard → Email Templates → Create New Template
 *       Set "To Email" = karankinger@medagghealthcare.com   ← contact enquiries go here
 *       Use this template body:
 *
 *         From: {{from_name}} ({{from_email}})
 *         Phone: {{phone}}
 *         Service: {{service}}
 *         Message: {{message}}
 *
 *       Copy the "Template ID" → paste below as VITE_EMAILJS_CONTACT_TEMPLATE_ID
 *
 * 4. Create a Hiring/Careers Template:
 *       Create another template with:
 *       Set "To Email" = medagghealthcareweb@gmail.com   ← job applications go here
 *
 *         Job Role: {{job_role}}
 *         Name: {{from_name}}
 *         Email: {{from_email}}
 *         Phone: {{phone}}
 *         Experience: {{experience}}
 *         LinkedIn: {{linkedin_url}}
 *         Cover Note: {{cover_note}}
 *
 *       Copy the "Template ID" → paste below as VITE_EMAILJS_CAREERS_TEMPLATE_ID
 *
 * 5. Get your Public Key:
 *       Dashboard → Account → General → Public Key
 *       Paste below as VITE_EMAILJS_PUBLIC_KEY
 * ─────────────────────────────────────────────────────────────────
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  CONTACT_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || '',
  CAREERS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID || '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',

  // Contact form enquiries → karankinger@medagghealthcare.com
  TO_EMAIL_CONTACT: 'karankinger@medagghealthcare.com',

  // Hiring / job applications → medagghealthcareweb@gmail.com
  TO_EMAIL_HIRING: 'medagghealthcareweb@gmail.com',
};
