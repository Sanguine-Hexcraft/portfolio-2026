<script setup lang="ts">
import { skillGroups } from '~/content/skills'
</script>

<template>
  <section id="skills" class="py-28 border-b-2 border-grid-bright">
    <div class="max-w-5xl mx-auto px-6">
      <SectionLabel label="SKILLS" />
      <div class="grid md:grid-cols-3 gap-10">
        <div v-for="group in skillGroups" :key="group.category">
          <div class="font-mono text-xs text-gold tracking-widest mb-5">// {{ group.category.toUpperCase() }}</div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="font-mono text-xs text-ink-muted tracking-wide border border-grid px-3 py-1.5"
            >{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
