/**
 * Medagg Ventures — TeleCRM Integration Service
 * 
 * Official Endpoint:
 *   POST https://next-api.telecrm.in/enterprise/658abddbf911ed2d692b0cf5/autoupdatelead
 * 
 * Authentication:
 *   Header: Authorization: Bearer <token>
 *   Token source: client/.env -> VITE_TELECRM_ASYNC_TOKEN
 * 
 * Phone Number Requirement:
 *   TeleCRM requires a 12-digit phone number with country code (e.g. 919876543210).
 */

const ENTERPRISE_ID = '658abddbf911ed2d692b0cf5';
const TELECRM_ENDPOINT = `https://next-api.telecrm.in/enterprise/${ENTERPRISE_ID}/autoupdatelead`;

/**
 * Format raw phone number into 12-digit Indian format (91XXXXXXXXXX)
 * @param {string} rawPhone 
 * @returns {string}
 */
export const formatPhone = (rawPhone) => {
  if (!rawPhone) return '';

  // Extract digits only
  let digits = String(rawPhone).replace(/\D/g, '');

  // Strip leading zero if 11 digits (e.g., 09876543210 -> 9876543210)
  if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  // Prepend 91 if 10 digits
  if (digits.length === 10) {
    return '91' + digits;
  }

  // If already 12 digits starting with 91, return as is
  if (digits.length === 12 && digits.startsWith('91')) {
    return digits;
  }

  return digits;
};

/**
 * Send lead details to TeleCRM Async API
 * 
 * @param {Object} lead
 * @param {string} lead.name
 * @param {string} lead.phone
 * @param {string} [lead.email]
 * @param {string} [lead.message]
 * @param {string} [lead.service]
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export const sendLeadToTeleCRM = async (lead) => {
  const phone = formatPhone(lead.phone);

  if (!phone || phone.length < 10) {
    console.warn('[TeleCRM] Skipped: Invalid phone number format:', lead.phone);
    return { success: false, error: 'Invalid phone format' };
  }

  const asyncToken = (
    import.meta.env.VITE_TELECRM_ASYNC_TOKEN ||
    import.meta.env.VITE_TELECRM_API_KEY ||
    ''
  ).trim();

  if (!asyncToken || asyncToken === ENTERPRISE_ID) {
    console.warn(
      '[TeleCRM] Skipping request — VITE_TELECRM_ASYNC_TOKEN / VITE_TELECRM_API_KEY in .env is missing or set to Enterprise ID instead of Token.'
    );
    return { success: false, error: 'Async token not configured in .env' };
  }

  // Construct standard payload
  const payload = {
    fields: {
      name: (lead.name || 'Website Visitor').trim(),
      phone: phone,
      ...(lead.email ? { email: lead.email.trim() } : {}),
      source: 'Website',
      lead_source: 'Website',
      'Lead Source': 'Website',
    },
    actions: [
      {
        type: 'SYSTEM_NOTE',
        text: [
          `Source: Medagg Ventures Website`,
          `Form: ${lead.service || 'Contact Form'}`,
          lead.message ? `Message: ${lead.message}` : null,
        ]
          .filter(Boolean)
          .join('\n'),
      },
    ],
  };

  // Standard Bearer header
  const authHeader = asyncToken.toLowerCase().startsWith('bearer ')
    ? asyncToken
    : `Bearer ${asyncToken}`;

  try {
    const response = await fetch(TELECRM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader,
      },
      body: JSON.stringify(payload),
    });

    const resultText = await response.text();

    if (response.ok) {
      console.log('[TeleCRM] ✅ Lead successfully ingested:', { phone, name: lead.name });
      return { success: true };
    } else {
      console.warn(`[TeleCRM] ⚠️ Failed with status ${response.status}:`, resultText);
      return { success: false, error: `HTTP ${response.status}: ${resultText}` };
    }
  } catch (error) {
    console.error('[TeleCRM] ❌ Network error when sending lead:', error);
    return { success: false, error: error.message };
  }
};
