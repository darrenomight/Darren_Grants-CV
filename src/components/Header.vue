<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../assets/logo.png'

defineEmits<{ 'open-contact': [] }>()

const route = useRoute()
const mobileOpen = ref(false)
const mobileRef = ref<HTMLElement | null>(null)

function handleClickOutside(e: MouseEvent) {
  if (mobileRef.value && !mobileRef.value.contains(e.target as Node)) {
    mobileOpen.value = false
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
  <header ref="mobileRef" class="mx-6 mt-6 border border-white/20 rounded-lg header-overlay">
    <div class="flex items-center justify-between px-4 py-1">
      <!-- Logo -->
      <router-link to="/" class="flex-shrink-0">
        <img :src="logo" alt="Logo" class="w-16 h-16 rounded-md object-contain" />
      </router-link>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-3">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="px-4 py-2 text-base rounded transition text-white/80 hover:text-white hover:bg-white/10"
          :class="route.path === link.to ? 'bg-white/15 text-white font-semibold' : ''"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <!-- Desktop contact -->
      <button
        class="hidden md:block text-sm text-white hover:text-white/80 border border-white/30 rounded px-3 py-1.5 flex-shrink-0"
        @click="$emit('open-contact')"
      >
        Contact
      </button>

      <!-- Mobile burger -->
      <button
        class="md:hidden text-white border border-white/30 rounded px-3 py-1.5"
        @click="mobileOpen = !mobileOpen"
      >
        ☰
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div
      v-if="mobileOpen"
      class="md:hidden border-t border-white/20 flex flex-col"
    >
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="px-4 py-3 text-sm text-white/80 hover:text-white border-b border-white/10 last:border-b-0"
        :class="route.path === link.to ? 'bg-white/10 font-semibold text-white' : ''"
        @click="mobileOpen = false"
      >
        {{ link.label }}
      </router-link>
      <button
        class="px-4 py-3 text-sm text-left text-white/80 hover:text-white"
        @click="mobileOpen = false; $emit('open-contact')"
      >
        Contact
      </button>
    </div>
  </header>
</template>