export interface Skill {
  label: string
  level: number // 0–100
}

export interface SkillGroup {
  category: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { label: 'HTML / CSS', level: 95 },
      { label: 'JavaScript', level: 88 },
      { label: 'React', level: 72 },
      { label: 'Vue / Nuxt', level: 70 },
      { label: 'Typography', level: 95 },
    ],
  },
  {
    category: 'Backend & Systems',
    skills: [
      { label: 'WordPress / PHP', level: 90 },
      { label: 'Python', level: 65 },
      { label: 'Linux', level: 62 },
      { label: 'Git', level: 78 },
      { label: 'APIs', level: 60 },
    ],
  },
  {
    category: 'Design & Tools',
    skills: [
      { label: 'Adobe Creative Suite', level: 95 },
      { label: 'Branding', level: 88 },
      { label: 'Print Production', level: 90 },
      { label: 'UI / Web Design', level: 85 },
    ],
  },
]
