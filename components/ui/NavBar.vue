<script setup lang="ts">
const { isDark, toggle } = useDarkMode()

const links = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXP', href: '#experience' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'INTERESTS', href: '#interests' },
]
</script>

<template>
  <nav class="fixed top-0 inset-x-0 z-50 bg-bg-base/90 backdrop-blur-sm border-b border-grid">
    <div class="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
      <span class="font-mono text-xs text-cyber tracking-widest">~/portfolio</span>
      <ul class="flex items-center gap-6">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="font-mono text-xs text-ink-muted hover:text-cyber transition-colors tracking-wider"
          >{{ link.label }}</a>
        </li>
        <li>
          <button
            @click="toggle"
            class="font-mono text-xs text-ink-muted hover:text-cyber transition-colors tracking-wider border border-grid px-2 py-1"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >{{ isDark ? '◐ LIGHT' : '● DARK' }}</button>
        </li>
      </ul>
    </div>
  </nav>
</template>
