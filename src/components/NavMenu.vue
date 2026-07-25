<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)

function handleClickOutside(e: MouseEvent) {
  if (menuRef.value && !menuRef.value.contains(e.target as Node)) {
    menuOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))

const links = [
  { to: '/about', label: 'About' },
  { to: '/education', label: 'Education' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/hobbies', label: 'Hobbies' },
  { to: '/blog', label: 'Blog' },
]
</script>

<template>
  <div class="relative" ref="menuRef">
    <button
      class="flex items-center gap-1 text-sm text-stone-800 hover:text-stone-950 border border-stone-800/30 rounded px-3 py-1.5"
      @click="menuOpen = !menuOpen"
    >
      Menu <span class="text-xs">▾</span>
    </button>

    <div
      v-if="menuOpen"
      class="absolute left-0 mt-1 w-40 bg-emerald-900 border border-white/20 rounded-lg shadow-lg z-50 overflow-hidden"
    >
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block px-4 py-2 text-sm text-white hover:bg-white/10"
        :class="route.path === link.to ? 'bg-white/10 font-semibold' : ''"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </router-link>
    </div>
  </div>
</template>