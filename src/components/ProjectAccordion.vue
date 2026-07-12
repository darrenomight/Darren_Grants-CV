<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '../data/projects'

const openId = ref<string | null>(null)

function toggle(id: string) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="project in projects"
      :key="project.id"
      class="border border-white/20 rounded-lg overflow-hidden"
    >
      <button
        class="w-full flex items-center justify-between p-4 text-left hover:bg-white/10 transition"
        @click="toggle(project.id)"
      >
        <div>
          <p class="font-semibold">{{ project.name }}</p>
          <p class="text-sm text-white/60">{{ project.summary }}</p>
        </div>
        <span
          class="text-white/60 transition-transform"
          :class="openId === project.id ? 'rotate-180' : ''"
        >
          ▼
        </span>
      </button>

      <div v-if="openId === project.id" class="p-4 pt-0 border-t border-white/10">
        <p class="text-white/80 leading-relaxed mb-4">{{ project.description }}</p>

        <img
          v-if="project.media?.type === 'image' && project.media.src"
          :src="project.media.src"
          :alt="project.name"
          class="w-full rounded-lg border border-white/20 mb-4"
        />
        <a>
            <video
                v-if="project.media?.type === 'video' && project.media.src"
                :src="project.media.src"
                controls
                class="w-full rounded-lg border border-white/20 mb-4"
            />

        
          v-if="project.link"
          :href="project.link"
          target="_blank"
          class="text-sm underline text-white/80 hover:text-white"
        >
          View project →
        </a>
      </div>
    </div>
  </div>
</template>