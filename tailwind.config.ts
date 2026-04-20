import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          raised: 'var(--bg-raised)',
        },
        cyber: {
          DEFAULT: '#00d4ff',
          dim: '#0099bb',
        },
        gold: {
          DEFAULT: '#f0a500',
          dim: '#b87d00',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)',
          faint: 'var(--ink-faint)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'ui-sans-serif', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        serif: ['Georgia', 'ui-serif', 'serif'],
      },
      borderColor: {
        grid: 'var(--border-grid)',
        'grid-bright': 'var(--border-grid-bright)',
      },
    },
  },
} satisfies Config
