<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps<{
  name?: string
  title?: string
}>()

const route = useRoute()
</script>

<template>
  <header class="flex items-center gap-4 mx-6 mt-6 border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm p-4">
    <router-link
      v-if="route.name !== 'landing'"
      to="/"
      class="flex items-center gap-1 text-sm text-white hover:text-white/80 flex-shrink-0 md:w-24 md:h-10 md:mx-0 md:max-w-none border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm p-1"
    >
       Back To Start
    </router-link>

    <div class="w-16 h-16 rounded-md bg-white/20 flex-shrink-0"></div>

    <div class="flex-1 text-center text-white">
      <h1 class="text-xl font-semibold">Welcome to the website for  {{ name ?? 'Darren Grants' }}</h1>
      <p class="text-m">{{ title ?? 'Software Engineer, Programmer, Cloud Interested' }}</p>
    </div>

    <button class="text-sm text-white hover:text-white/80 flex-shrink-0  md:w-22 md:h-16 md:mx-0 md:max-w-none border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm" @click="$emit('open-contact')">
      Contact
    </button>
  </header>
</template>
