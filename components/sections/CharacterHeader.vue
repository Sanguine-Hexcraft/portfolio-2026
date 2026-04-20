<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const dots = ref(0)
const showCursor = ref(true)
let dotsTimer: ReturnType<typeof setInterval>
let cursorTimer: ReturnType<typeof setInterval>

onMounted(() => {
  dotsTimer = setInterval(() => {
    dots.value = (dots.value + 1) % 4
  }, 500)
  cursorTimer = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
})

onUnmounted(() => {
  clearInterval(dotsTimer)
  clearInterval(cursorTimer)
})
</script>

<template>
  <header class="pt-28 pb-16 border-b border-grid">
    <div class="max-w-5xl mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-8 items-start">

        <!-- Identity -->
        <div class="md:col-span-2">
          <p class="font-mono text-xs text-cyber tracking-widest mb-3">
            INITIALIZING PROFILE<span class="inline-block w-6 text-left">{{ '.'.repeat(dots) }}</span><span :class="showCursor ? 'opacity-100' : 'opacity-0'" class="relative -top-[2px] transition-opacity duration-75">▋</span>
          </p>
          <div class="flex items-center gap-6 mb-6">
            <img src="/images/me.png" alt="Patrick Witmer" class="w-36 h-36 object-cover border-2 border-grid" />
            <h1 class="font-serif text-6xl sm:text-7xl font-normal text-ink leading-none tracking-tight">
              Patrick<br />Witmer
            </h1>
          </div>
          <p class="text-ink-muted text-lg leading-relaxed max-w-lg">
            Full-stack developer with 20+ years building and maintaining production systems. Strong front-end instincts informed by a design foundation — deepening backend skills in Python, Linux, and APIs.
          </p>
        </div>

        <!-- Stat block -->
        <div class="border border-grid bg-bg-surface rounded-sm p-5 font-mono text-xs space-y-2.5">
          <div class="text-cyber tracking-widest mb-3">CHARACTER_SHEET.exe</div>
          <div class="flex justify-between text-ink-muted">
            <span>CLASS</span>
            <span class="text-ink">Full-Stack Dev</span>
          </div>
          <div class="h-px bg-grid" />
          <div class="flex justify-between text-ink-muted">
            <span>LEVEL</span>
            <span class="text-ink">20+ YRS</span>
          </div>
          <div class="h-px bg-grid" />
          <div class="flex justify-between text-ink-muted">
            <span>STATUS</span>
            <span class="text-green-400">AVAILABLE</span>
          </div>
          <div class="h-px bg-grid" />
          <div class="flex justify-between text-ink-muted">
            <span>LOCATION</span>
            <span class="text-ink">Salt Lake City, UT</span>
          </div>
          <div class="h-px bg-grid" />
          <div class="flex justify-between text-ink-muted">
            <span>SPEC</span>
            <span class="text-ink">Dev · Design · Python</span>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>
