<script setup lang="ts">
import { projects } from '~/content/projects'
</script>

<template>
  <section id="projects" class="py-28 border-b-2 border-grid-bright">
    <div class="max-w-5xl mx-auto px-6">
      <SectionLabel label="PROJECTS" />
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group flex flex-col bg-bg-surface border-2 border-grid hover:border-cyber transition-colors"
        >
          <!-- Top bar -->
          <div class="flex items-center justify-between px-5 py-3 border-b-2 border-grid group-hover:border-cyber transition-colors">
            <span v-if="project.featured" class="font-mono text-xs text-gold tracking-widest">◆ FEATURED</span>
            <span v-else class="font-mono text-xs text-ink-faint tracking-widest">PROJECT</span>
            <div class="flex gap-3">
              <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener"
                class="font-mono text-xs font-bold text-ink-faint hover:text-cyber transition-colors tracking-wider">SRC ↗</a>
              <a v-if="project.url" :href="project.url" target="_blank" rel="noopener"
                class="font-mono text-xs font-bold text-ink-faint hover:text-cyber transition-colors tracking-wider">LIVE ↗</a>
            </div>
          </div>

          <!-- Body -->
          <div class="flex flex-col flex-1 p-5">
            <h3 class="font-display font-bold text-ink text-xl mb-3 group-hover:text-cyber transition-colors leading-tight">{{ project.title }}</h3>
            <p class="text-ink-muted text-sm leading-relaxed flex-1 mb-5">{{ project.description }}</p>

            <!-- Tag chips -->
            <div class="flex flex-wrap gap-2 pt-4 border-t-2 border-grid">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="font-mono text-xs px-2.5 py-1 border-2 border-grid bg-bg-raised text-ink-muted tracking-wide"
              >{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
