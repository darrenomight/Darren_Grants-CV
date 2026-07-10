<script setup lang="ts">
defineProps<{
  label: string
  to: string
  pos?: string
}>()
</script>

<template>
  <router-link
    :to="to"
    class="w-full max-w-xs mx-auto h-20
           md:absolute md:w-32 md:h-32 md:mx-0 md:max-w-none
           border border-white/30 rounded-lg bg-white/10 backdrop-blur-sm
           flex items-center justify-center text-center text-white font-medium
           hover:bg-white/20 hover:scale-105 transition-all duration-300"
    :class="pos"
  >
    {{ label }}
  </router-link>
</template>