<script setup lang="ts">
import NavCard from '../components/NavCard.vue'

const cards = [
  { label: 'About',          to: '/about',      pos: 'md:top-[50px]  md:left-[10%]' },
  { label: 'Education',     to: '/education', pos: 'md:top-[150px] md:left-[25%]' },
  { label: 'Projects',       to: '/projects',   pos: 'md:top-[250px] md:left-[40%]' },
  { label: 'Experience',      to: '/experience',  pos: 'md:top-[250px] md:left-[55%]' },
  { label: 'Hobbies',        to: '/hobbies',    pos: 'md:top-[150px] md:left-[69%]' },
  { label: 'Blog / Writing', to: '/blog',       pos: 'md:top-[50px]  md:left-[85%]' },
]
</script>

<template>
  <div class="flex flex-col gap-4 py-8 px-4
              md:relative md:block md:w-full md:h-[500px] md:py-0 md:px-0">
    <NavCard
      v-for="card in cards"
      :key="card.label"
      :label="card.label"
      :to="card.to"
      :pos="card.pos"
    />
  </div>
</template>