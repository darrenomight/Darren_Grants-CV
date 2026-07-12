export interface Job {
  company: string
  role: string
  dates: string
  location?: string
  description: string
}

export const experience: Job[] = [
  {
    company: 'Company Name',
    role: 'Job Title',
    dates: '2024 — Present',
    location: 'Dublin, Ireland',
    description: 'What you did, key responsibilities, achievements.',
  },
  // up to 4 total
]