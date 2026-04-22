export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['HTML / CSS', 'JavaScript', 'React', 'Vue / Nuxt', 'Typography'],
  },
  {
    category: 'Backend & Systems',
    skills: ['Python', 'Linux', 'Git', 'APIs', 'WordPress / PHP'],
  },
  {
    category: 'Design & Tools',
    skills: ['Adobe Creative Suite', 'Branding', 'Print Production', 'UI / Web Design'],
  },
]
