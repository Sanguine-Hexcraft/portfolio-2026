export interface Project {
  title: string
  description: string
  tags: string[]
  url: string | null
  repo: string | null
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'Mills Publishing Platform',
    description: 'Publishing and digital media platform serving 8+ Utah arts organizations including Utah Symphony, Utah Opera, and Utah Arts Festival.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
    url: 'https://millspub.com',
    repo: null,
    featured: true,
  },
  {
    title: 'Palantir',
    description: 'AI agent built in Python — a personal experiment in tool use, prompt engineering, and building something that actually thinks for you.',
    tags: ['Python', 'AI', 'LLM', 'CLI'],
    url: null,
    repo: 'https://github.com/Sanguine-Hexcraft/Palantir',
    featured: true,
  },
  {
    title: 'Portfolio 2026',
    description: 'This site. Built with Nuxt 3, Tailwind CSS, and TypeScript. Statically generated and deployed to GitHub Pages.',
    tags: ['Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Vue'],
    url: null,
    repo: 'https://github.com/Sanguine-Hexcraft/portfolio-2026',
    featured: true,
  },
  {
    title: 'Hexteroids',
    description: 'Python Asteroids clone built as a hobby project — a complete game loop with collision detection, sprite rendering, and increasing difficulty.',
    tags: ['Python', 'Pygame', 'Game Dev'],
    url: null,
    repo: 'https://github.com/Sanguine-Hexcraft/Hexteroids',
    featured: false,
  },
  {
    title: 'Horadric Cube',
    description: 'Static site conjuration tool written in Python. Converts structured content into deployable HTML — work in progress.',
    tags: ['Python', 'Static Site', 'WIP'],
    url: null,
    repo: 'https://github.com/Sanguine-Hexcraft/Horadric-Cube',
    featured: false,
  },
  {
    title: 'DVMF',
    description: 'Digital platform for the Deer Valley Music Festival — event-driven content and publication workflows.',
    tags: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    url: 'https://dvmf.millspub.com',
    repo: null,
    featured: false,
  },
  {
    title: 'Ballet West',
    description: 'Digital presence for Ballet West company, part of the Mills Publishing network of arts organization sites.',
    tags: ['WordPress', 'HTML', 'CSS'],
    url: 'https://balletwest.millspub.com',
    repo: null,
    featured: false,
  },
  {
    title: 'Sports Guide Magazine',
    description: 'Full digital publication for Utah outdoor recreation — custom WordPress build with editorial workflows and mobile-optimized layouts.',
    tags: ['WordPress', 'Custom Theme', 'CSS', 'JavaScript'],
    url: 'https://sportsguidemag.com',
    repo: null,
    featured: false,
  },
]
