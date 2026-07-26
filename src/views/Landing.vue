<script setup lang="ts">
import NavCard from '../components/NavCard.vue'

const cards = [
  { label: 'About', to: '/about', pos: 'md:top-[12%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2' },
  { label: 'Education', to: '/education', pos: 'md:top-[25%] md:left-[79%] md:-translate-x-1/2 md:-translate-y-1/2' },
  { label: 'Projects', to: '/projects', pos: 'md:top-[73%] md:left-[79%] md:-translate-x-1/2 md:-translate-y-1/2' },
  { label: 'Experience', to: '/experience', pos: 'md:top-[86%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2' },
  { label: 'Hobbies', to: '/hobbies', pos: 'md:top-[73%] md:left-[21%] md:-translate-x-1/2 md:-translate-y-1/2' },
  { label: 'Blog / Writing', to: '/blog', pos: 'md:top-[25%] md:left-[21%] md:-translate-x-1/2 md:-translate-y-1/2' },
]
</script>

<template>
<div class="relative flex flex-col gap-4 items-center px-6 py-8
            md:block md:w-full md:h-[580px] md:mt-12 md:py-0 md:px-0">

<svg class="hidden md:block absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100"
  preserveAspectRatio="none">
  <!-- Node coordinates for reference:
       About      (50, 12)
       Education  (79, 25)
       Projects   (79, 73)
       Experience (50, 86)
       Hobbies    (21, 73)
       Blog       (21, 25)
  -->

  <!-- Perimeter: About -> Education -->
  <line x1="50" y1="12" x2="79" y2="25" stroke="white" stroke-opacity="0.12" stroke-width="0.3" />
  <!-- Perimeter: Education -> Projects -->
  <line x1="79" y1="25" x2="79" y2="73" stroke="white" stroke-opacity="0.12" stroke-width="0.3" />
  <!-- Perimeter: Projects -> Experience -->
  <line x1="79" y1="73" x2="50" y2="86" stroke="white" stroke-opacity="0.12" stroke-width="0.3" />
  <!-- Perimeter: Experience -> Hobbies -->
  <line x1="50" y1="86" x2="21" y2="73" stroke="white" stroke-opacity="0.12" stroke-width="0.3" />
  <!-- Perimeter: Hobbies -> Blog -->
  <line x1="21" y1="73" x2="21" y2="25" stroke="white" stroke-opacity="0.12" stroke-width="0.3" />
  <!-- Perimeter: Blog -> About -->
  <line x1="21" y1="25" x2="50" y2="12" stroke="white" stroke-opacity="0.12" stroke-width="0.3" />

  <!-- Diagonal: About -> Experience -->
  <line x1="50" y1="12" x2="50" y2="86" stroke="white" stroke-opacity="0.12" stroke-width="0.3" />
  <!-- Diagonal: Education -> Hobbies -->
  <line x1="79" y1="25" x2="21" y2="73" stroke="white" stroke-opacity="0.12" stroke-width="0.3" />
  <!-- Diagonal: Blog -> Projects -->
  <line x1="21" y1="25" x2="79" y2="73" stroke="white" stroke-opacity="0.12" stroke-width="0.3" />
</svg>

<NavCard v-for="card in cards" :key="card.label" :label="card.label" :to="card.to" :pos="card.pos" />
</div>
</template>