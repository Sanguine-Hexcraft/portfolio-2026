<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div class="flex items-center gap-4 mb-12">
    <span class="font-mono text-xs text-cyber tracking-widest whitespace-nowrap">[ {{ label }} ]</span>
    <div class="flex-1 h-px bg-grid-bright" />
  </div>
</template>
