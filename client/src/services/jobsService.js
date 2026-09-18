import { jobsData as initialJobs } from '../data/jobsData';

const LOCAL_STORAGE_KEY = 'medagg_custom_jobs';

/**
 * Get all active job listings (Initial default jobs + any custom jobs added live via form)
 */
export const getJobs = () => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stored) return initialJobs;
    const customJobs = JSON.parse(stored);
    if (!Array.isArray(customJobs)) return initialJobs;

    // Filter out initial jobs that might be shadowed and combine with custom jobs
    return [...customJobs, ...initialJobs.filter((ij) => !customJobs.some((cj) => cj.id === ij.id))];
  } catch (err) {
    console.error('[JobsService] Error reading jobs from storage:', err);
    return initialJobs;
  }
};

/**
 * Smart Parser to extract structured job fields from raw text JDs
 */
export const parseRawJD = (rawText) => {
  if (!rawText || typeof rawText !== 'string') return {};

  const lines = rawText.split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return {};

  let title = '';
  let department = 'Advisory';
  let location = 'Chennai / Hybrid';
  let type = 'Full-time';
  let experience = '3+ Years';
  let salary = '';
  let shortDesc = '';
  let fullDesc = rawText;
  let requirements = [];
  let responsibilities = [];
  let perks = [];

  // 1. Try extracting explicit key-value lines
  lines.forEach((line) => {
    const lower = line.toLowerCase();
    if (!title && (lower.startsWith('title:') || lower.startsWith('job title:') || lower.startsWith('position:'))) {
      title = line.split(':').slice(1).join(':').trim();
    } else if (lower.startsWith('department:') || lower.startsWith('team:') || lower.startsWith('domain:')) {
      department = line.split(':').slice(1).join(':').trim();
    } else if (lower.startsWith('location:') || lower.startsWith('city:')) {
      location = line.split(':').slice(1).join(':').trim();
    } else if (lower.startsWith('job type:') || lower.startsWith('type:') || lower.startsWith('employment type:')) {
      type = line.split(':').slice(1).join(':').trim();
    } else if (lower.startsWith('experience:') || lower.startsWith('exp:') || lower.startsWith('min experience:')) {
      experience = line.split(':').slice(1).join(':').trim();
    } else if (lower.startsWith('salary:') || lower.startsWith('ctc:') || lower.startsWith('compensation:')) {
      salary = line.split(':').slice(1).join(':').trim();
    }
  });

  // Fallback for title: first line if no explicit title tag
  if (!title && lines.length > 0) {
    title = lines[0].replace(/^#+\s*/, '').replace(/job description/i, '').trim();
    if (!title && lines.length > 1) title = lines[1];
  }

  // Parse sections (Requirements, Responsibilities, Benefits)
  let currentSection = '';
  lines.forEach((line) => {
    const lower = line.toLowerCase();
    if (lower.includes('requirement') || lower.includes('qualification') || lower.includes('key skills') || lower.includes('who you are')) {
      currentSection = 'requirements';
      return;
    }
    if (lower.includes('responsibility') || lower.includes('duties') || lower.includes('what you will do') || lower.includes('role description')) {
      currentSection = 'responsibilities';
      return;
    }
    if (lower.includes('benefit') || lower.includes('perks') || lower.includes('what we offer')) {
      currentSection = 'perks';
      return;
    }

    if (line.startsWith('-') || line.startsWith('*') || line.startsWith('•') || /^\d+\./.test(line)) {
      const bulletContent = line.replace(/^[-*•\d+.]+\s*/, '').trim();
      if (bulletContent) {
        if (currentSection === 'requirements') requirements.push(bulletContent);
        else if (currentSection === 'responsibilities') responsibilities.push(bulletContent);
        else if (currentSection === 'perks') perks.push(bulletContent);
        else if (requirements.length === 0) requirements.push(bulletContent);
      }
    }
  });

  // Short description fallback: first non-header, non-bullet line after title
  const descCandidate = lines.find((l) => !l.toLowerCase().includes('title:') && !l.startsWith('-') && !l.startsWith('*') && !l.startsWith('•') && l !== title);
  if (descCandidate) {
    shortDesc = descCandidate.substring(0, 160) + (descCandidate.length > 160 ? '...' : '');
  }

  return {
    title: title || 'Healthcare Advisory Professional',
    department: department || 'Advisory',
    location: location || 'Chennai / Hybrid',
    type: type || 'Full-time',
    experience: experience || '3+ Years',
    salary: salary || '',
    shortDesc: shortDesc || 'Join Medagg Ventures in driving high-impact healthcare advisory and hospital growth mandates.',
    fullDesc: fullDesc || rawText,
    requirements: requirements.length > 0 ? requirements : [],
    responsibilities: responsibilities.length > 0 ? responsibilities : [],
    perks: perks.length > 0 ? perks : [],
  };
};

/**
 * Add a new job opening to live website storage
 * @param {Object} jobInput 
 */
export const addJob = (jobInput) => {
  const existingJobs = getJobs();
  const slug = (jobInput.title || 'Job')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  const id = `job-${slug}-${Date.now()}`;

  const parseArray = (input) => {
    if (Array.isArray(input)) return input;
    return String(input || '')
      .split('\n')
      .map((r) => r.trim())
      .filter(Boolean);
  };

  const reqArray = parseArray(jobInput.requirements);
  const respArray = parseArray(jobInput.responsibilities);
  const perksArray = parseArray(jobInput.perks);

  const formattedJob = {
    id,
    title: jobInput.title.trim(),
    department: jobInput.department || 'Advisory',
    location: jobInput.location || 'Chennai / Hybrid',
    type: jobInput.type || 'Full-time',
    experience: jobInput.experience || '2+ Years',
    salary: jobInput.salary ? jobInput.salary.trim() : '',
    subtitle: jobInput.subtitle || 'Career Opportunity',
    shortDesc: jobInput.shortDesc || jobInput.title,
    fullDesc: jobInput.fullDesc || jobInput.shortDesc || jobInput.title,
    requirements: reqArray.length > 0 ? reqArray : ['Relevant industry experience', 'Strong analytical & communication skills'],
    responsibilities: respArray.length > 0 ? respArray : [],
    perks: perksArray.length > 0 ? perksArray : [],
    contactEmail: jobInput.contactEmail ? jobInput.contactEmail.trim() : 'careers@medaggventures.com',
    applyUrl: jobInput.applyUrl ? jobInput.applyUrl.trim() : '',
    isCustom: true,
    postedAt: new Date().toISOString(),
  };

  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  const currentCustom = stored ? JSON.parse(stored) : [];
  const updatedCustom = [formattedJob, ...currentCustom];

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCustom));
  return getJobs();
};

/**
 * Remove a custom job listing
 * @param {string} jobId 
 */
export const deleteJob = (jobId) => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stored) return getJobs();
    const currentCustom = JSON.parse(stored);
    const updatedCustom = currentCustom.filter((j) => j.id !== jobId);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCustom));
    return getJobs();
  } catch (err) {
    console.error('[JobsService] Error deleting job:', err);
    return getJobs();
  }
};

/**
 * Update an existing job listing
 * @param {string} jobId 
 * @param {Object} jobInput 
 */
export const updateJob = (jobId, jobInput) => {
  try {
    const parseArray = (input) => {
      if (Array.isArray(input)) return input;
      return String(input || '')
        .split('\n')
        .map((r) => r.trim())
        .filter(Boolean);
    };

    const reqArray = parseArray(jobInput.requirements);
    const respArray = parseArray(jobInput.responsibilities);
    const perksArray = parseArray(jobInput.perks);

    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    const currentCustom = stored ? JSON.parse(stored) : [];
    const existingIndex = currentCustom.findIndex((j) => j.id === jobId);

    const formattedJob = {
      id: jobId,
      title: jobInput.title ? jobInput.title.trim() : 'Job Title',
      department: jobInput.department || 'Advisory',
      location: jobInput.location || 'Chennai / Hybrid',
      type: jobInput.type || 'Full-time',
      experience: jobInput.experience || '2+ Years',
      salary: jobInput.salary ? jobInput.salary.trim() : '',
      subtitle: jobInput.subtitle || 'Career Opportunity',
      shortDesc: jobInput.shortDesc || jobInput.title,
      fullDesc: jobInput.fullDesc || jobInput.shortDesc || jobInput.title,
      requirements: reqArray.length > 0 ? reqArray : ['Relevant industry experience', 'Strong analytical & communication skills'],
      responsibilities: respArray.length > 0 ? respArray : [],
      perks: perksArray.length > 0 ? perksArray : [],
      contactEmail: jobInput.contactEmail ? jobInput.contactEmail.trim() : 'careers@medaggventures.com',
      applyUrl: jobInput.applyUrl ? jobInput.applyUrl.trim() : '',
      isCustom: true,
      postedAt: existingIndex !== -1 ? (currentCustom[existingIndex].postedAt || new Date().toISOString()) : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    let updatedCustom;
    if (existingIndex !== -1) {
      updatedCustom = [...currentCustom];
      updatedCustom[existingIndex] = formattedJob;
    } else {
      updatedCustom = [formattedJob, ...currentCustom];
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCustom));
    return getJobs();
  } catch (err) {
    console.error('[JobsService] Error updating job:', err);
    return getJobs();
  }
};


