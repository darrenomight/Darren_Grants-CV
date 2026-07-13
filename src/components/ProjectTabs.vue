<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects, overallTech } from '../data/projects'

const activeId = ref<string>(projects[0]?.id ?? 'tech')

const tabs = computed(() => [
  ...projects.map(p => ({ id: p.id, label: p.name })),
  { id: 'tech', label: 'Tech' },
])

const activeProject = computed(() => projects.find(p => p.id === activeId.value))

function step(dir: 1 | -1) {
  const ids = tabs.value.map(t => t.id)
  const idx = ids.indexOf(activeId.value)
  activeId.value = ids[(idx + dir + ids.length) % ids.length]
}
</script>

<template>
  <div>
    <div class="flex overflow-x-auto border border-white/20 rounded-lg mb-6">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="flex-shrink-0 px-5 py-3 text-sm whitespace-nowrap border-r border-white/10 last:border-r-0 hover:bg-white/10 transition"
        :class="activeId === tab.id ? 'bg-white/15 font-semibold text-white' : 'text-white/60'"
        @click="activeId = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <Transition name="fade" mode="out-in">
      <div v-if="activeId === 'tech'" key="tech" class="border border-white/20 rounded-lg p-6">
        <h2 class="text-xl font-bold mb-4">Tech I work with</h2>
        <ul class="flex flex-wrap gap-2">
          <li v-for="tech in overallTech" :key="tech" class="px-3 py-1 rounded bg-white/10 border border-white/20 text-sm text-white/80">
            {{ tech }}
          </li>
        </ul>
      </div>

      <div v-else-if="activeProject" :key="activeProject.id" class="flex flex-col md:flex-row gap-6">
        <div class="flex-1 border border-white/20 rounded-lg p-6">
          <h2 class="text-2xl font-bold mb-4">{{ activeProject.headline }}</h2>
          <p v-for="(para, i) in activeProject.paragraphs" :key="i" class="text-white/80 leading-relaxed mb-4">
            {{ para }}
          </p>
          <a v-if="activeProject.link" :href="activeProject.link" target="_blank" class="text-sm underline text-white/80 hover:text-white">
            View project →
          </a>
        </div>

        <div class="w-full md:w-72 flex flex-col gap-4 flex-shrink-0">
          <img
            v-if="activeProject.media?.type === 'image' && activeProject.media.src"
            :src="activeProject.media.src"
            :alt="activeProject.name"
            class="w-full h-48 object-cover rounded-lg border border-white/20"
          />
          <div v-else class="w-full h-48 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-white/30 text-sm">
            Image / video
          </div>

          <div class="border border-white/20 rounded-lg p-4">
            <h3 class="font-semibold mb-3 text-center border-b border-white/10 pb-2">Tech Stack</h3>
            <ul class="space-y-1.5">
              <li v-for="tech in activeProject.techStack" :key="tech" class="text-sm text-white/70">• {{ tech }}</li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>

    <div class="flex justify-between mt-6">
      <button class="text-sm text-white/60 hover:text-white" @click="step(-1)">← Prev</button>
      <button class="text-sm text-white/60 hover:text-white" @click="step(1)">Next →</button>
    </div>
  </div>
</template>