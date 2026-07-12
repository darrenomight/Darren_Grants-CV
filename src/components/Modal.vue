<script setup lang="ts">
defineProps<{ open: boolean; title: string }>()
defineEmits<{ close: [] }>()
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    @click.self="$emit('close')"
  >
    <div class="bg-emerald-900 border border-white/20 rounded-lg p-6 max-w-lg w-full text-white relative max-h-[80vh] overflow-y-auto">
      <button class="absolute top-3 right-3 text-white/60 hover:text-white" @click="$emit('close')">✕</button>
      <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>