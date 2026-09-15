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
 * Add a new job opening to live website storage
 * @param {Object} newJob 
 */
export const addJob = (jobInput) => {
  const existingJobs = getJobs();
  const slug = (jobInput.title || 'Job')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  const id = `job-${slug}-${Date.now()}`;

  const reqArray = Array.isArray(jobInput.requirements)
    ? jobInput.requirements
    : String(jobInput.requirements || '')
        .split('\n')
        .map((r) => r.trim())
        .filter(Boolean);

  const formattedJob = {
    id,
    title: jobInput.title.trim(),
    department: jobInput.department || 'General',
    location: jobInput.location || 'Chennai / Hybrid',
    type: jobInput.type || 'Full-time',
    experience: jobInput.experience || '2+ Years',
    subtitle: jobInput.subtitle || 'Career Opportunity',
    shortDesc: jobInput.shortDesc || jobInput.title,
    fullDesc: jobInput.fullDesc || jobInput.shortDesc || jobInput.title,
    requirements: reqArray.length > 0 ? reqArray : ['Relevant industry experience', 'Strong communication skills'],
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
