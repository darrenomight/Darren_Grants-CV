<script setup lang="ts">
import { experience } from '../data/experience'
</script>

<template>
  <div class="max-w-2xl mx-auto p-8 text-white">
    <h1 class="text-3xl font-bold mb-8">Experience</h1>

    <div class="flex flex-col gap-6">
      <div
        v-for="job in experience"
        :key="job.company + job.role"
        class="border border-white/20 rounded-lg p-5"
      >
        <div class="flex flex-wrap justify-between items-baseline gap-2 mb-2">
          <h2 class="text-lg font-semibold">{{ job.role }}</h2>
          <span class="text-sm text-white/60">{{ job.dates }}</span>
        </div>
        <p class="text-sm text-white/70 mb-3">
          {{ job.company }}<span v-if="job.location"> · {{ job.location }}</span>
        </p>
        <p class="text-white/80 leading-relaxed">{{ job.description }}</p>
      </div>
    </div>
  </div>
</template>