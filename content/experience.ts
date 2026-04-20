export interface ExperienceEntry {
  role: string
  company: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  bullets: string[]
  skills: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Full-Stack Web Developer',
    company: 'Mills Publishing Inc.',
    location: 'Salt Lake City, UT',
    startDate: '2005-05',
    endDate: null,
    description: 'Owned development and maintenance of 8+ production websites and digital platforms serving arts and publishing organizations across Utah.',
    bullets: [
      'Architected and implemented CMS-driven systems using WordPress (custom themes, plugins, structured content workflows)',
      'Delivered mobile-optimized digital publications supporting print-to-web transformation workflows',
      'Managed full deployment lifecycle including hosting, updates, performance, and ongoing production support',
      'Built automation and workflow improvements using Git-based processes and scripting (cron jobs, task automation)',
      'Supported simultaneous high-priority projects under strict deadlines across multiple client stakeholders',
    ],
    skills: ['JavaScript', 'WordPress', 'HTML', 'CSS', 'Git', 'Linux', 'PHP'],
  },
  {
    role: 'Freelance Web Developer & Designer',
    company: 'Patrick Witmer Designs',
    location: 'Salt Lake City, UT',
    startDate: '2007-01',
    endDate: null,
    description: 'Independent studio fulfilling web development and design contracts for brands and small businesses.',
    bullets: [
      'Contracted by Skullcandy for design and web work',
      'Served WellPlayed Productions and numerous SLC-area small businesses',
      'Delivered end-to-end projects: strategy, design, development, and launch',
    ],
    skills: ['Branding', 'Typography', 'Adobe CC', 'HTML', 'CSS', 'JavaScript'],
  },
]
