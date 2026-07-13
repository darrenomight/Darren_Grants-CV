<script setup lang="ts">
import NavMenu from './NavMenu.vue'

defineProps<{ name?: string; title?: string }>()
defineEmits<{ 'open-contact': [] }>()
</script>

<template>
  <header class="flex items-center gap-4 mx-6 mt-6 border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm p-4">
    <NavMenu />
    <div class="w-16 h-16 rounded-md bg-white/20 flex-shrink-0"></div>
    <div class="flex-1 text-center text-stone-800">
      <h1 class="text-xl font-semibold">Welcome, {{ name ?? 'Darren Grants' }}</h1>
      <p class="text-sm">{{ title ?? 'Software Engineer' }}</p>
    </div>
    <button
      class="text-sm text-stone-800 hover:text-stone-950 flex-shrink-0 border border-stone-800/30 rounded px-3 py-1.5"
      @click="$emit('open-contact')"
    >
      Contact
    </button>
  </header>
</template>