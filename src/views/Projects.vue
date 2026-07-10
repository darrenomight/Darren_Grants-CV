<script setup lang="ts">
const works = [
  { projects: 'Name', TechStack: 'Tech Work', dates: '2024 — Present', desc: 'What you did.' },
]
</script>

<template>
  <div class="max-w-2xl mx-auto p-8 text-white text-overlay my-6 mx-4 md:mx-auto">
    <h1 class="text-3xl font-bold mb-6">Experience</h1>
    <div v-for="work in works" :key="work.projects" class="mb-6 border-l-2 border-white/30 pl-4">
      <h2 class="text-lg font-semibold">{{ work.TechStack }} — {{ work.projects }}</h2>
      <p class="text-sm text-white/60">{{ work.dates }}</p>
      <p class="text-white/80 mt-1">{{ work.desc }}</p>
    </div>
  </div>
</template>