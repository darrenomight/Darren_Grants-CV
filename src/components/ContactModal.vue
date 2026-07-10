<script setup lang="ts">
defineProps<{ open: boolean }>()
defineEmits<{ close: [] }>()
</script>

<template>
  <div
    v-if="open"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    @click.self="$emit('close')"
  >
    <div class="bg-emerald-900 border border-white/20 rounded-lg p-6 max-w-sm w-full text-white relative">
      <button
        class="absolute top-3 right-3 text-white/60 hover:text-white"
        @click="$emit('close')"
      >
        ✕
      </button>
      <h2 class="text-xl font-semibold mb-4"> Want to contact me?</h2>
      <ul class="space-y-2 text-white/80">
        <li>Email: <a href="mailto:you@example.com" class="underline">darrengrants06@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/darren-grants-92840335a/" class="underline" target="_blank">linkedin.com/in/darren-grants-92840335a/</a></li>
        <li>GitHub: <a href="https://github.com/darrenomight" class="underline" target="_blank">https://github.com/darrenomight</a></li>
      </ul>
    </div>
  </div>
</template>