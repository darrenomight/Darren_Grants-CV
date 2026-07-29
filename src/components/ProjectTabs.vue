<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '../data/projects'
import  techStackImg from '../assets/projects/images/TechStack.png'

const mode = ref<'grid' | 'detail'>('grid')
const activeId = ref<string>(projects[0]?.id ?? 'tech')

const tabs = computed(() => [
  ...projects.map(p => ({ id: p.id, label: p.name })),
  { id: 'tech', label: 'Tech' },
])

const activeProject = computed(() => projects.find(p => p.id === activeId.value))

function open(id: string) {
  activeId.value = id
  mode.value = 'detail'
}

function step(dir: 1 | -1) {
  const ids = tabs.value.map(t => t.id)
  const idx = ids.indexOf(activeId.value)
  activeId.value = ids[(idx + dir + ids.length) % ids.length]
}
</script>

<template>
  <div>
    <!-- Grid overview -->
    <div v-if="mode === 'grid'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <button
        v-for="project in projects"
        :key="project.id"
        class="text-overlay border border-white/20 rounded-lg overflow-hidden text-left hover:border-white/50 transition h-56 flex flex-col"
        @click="open(project.id)"
      >
        <img
          v-if="project.media?.src"
          :src="project.media.src"
          :alt="project.name"
          class="w-full h-28 object-cover flex-shrink-0"
        />
        <div v-else class="w-full h-28 bg-white/5 flex items-center justify-center text-white/30 text-xs flex-shrink-0">
          Image
        </div>
        <div class="p-4 flex-1 flex flex-col overflow-hidden">
          <h3 class="font-semibold truncate">{{ project.name }}</h3>
          <p class="text-sm text-white/60 line-clamp-2 mt-1">{{ project.headline }}</p>
        </div>
      </button>

      <!-- Tech card -->
      <button
        class="text-overlay border-2 border-emerald-400/40 rounded-lg overflow-hidden flex flex-col hover:border-emerald-400/70 transition h-56"
        @click="open('tech')"
      >
        <img :src="techStackImg" alt="Tech stack" class="w-full h-28 object-cover flex-shrink-0" />
        <div class="p-4 flex-1 flex flex-col items-center justify-center text-center">
          <h3 class="font-semibold">Tech Stack</h3>
          <p class="text-sm text-white/60 mt-1">Tools & languages I work with</p>
        </div>
      </button>
    </div>

    <!-- Detail view -->
    <div v-else>
      <button class="text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/50 rounded-lg px-4 py-2 mb-4 transition" @click="mode = 'grid'">
        ← All projects
      </button>

      <div class="text-overlay flex overflow-x-auto border border-white/20 rounded-lg mb-6">
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
        <div v-if="activeId === 'tech'" key="tech" class="text-overlay border border-white/20 rounded-lg p-6">
          <h2 class="text-xl font-bold mb-4">Tech I work with</h2>
          <img :src="techStackImg" alt="Tech stack" class="w-full rounded-lg" />
        </div>

        <div v-else-if="activeProject" :key="activeProject.id" class="flex flex-col lg:flex-row gap-6">
          <div class="text-overlay flex-1 border border-white/20 rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-4">{{ activeProject.headline }}</h2>
            <p v-for="(para, i) in activeProject.paragraphs" :key="i" class="text-white/80 leading-relaxed mb-4">
              {{ para }}
            </p>
            <a v-if="activeProject.link" :href="activeProject.link" target="_blank"
              class="inline-block mt-2 text-sm font-semibold text-white border border-white/30 hover:border-white/70 rounded-lg px-4 py-2 transition">
              View project →
            </a>
          </div>

          <div class="w-full lg:w-96 flex flex-col gap-4 flex-shrink-0">
            <img
              v-if="activeProject.media?.type === 'image' && activeProject.media.src"
              :src="activeProject.media.src"
              :alt="activeProject.name"
              class="w-full h-64 lg:h-72 object-cover rounded-lg border border-white/20"
            />
            <div v-else class="w-full h-64 lg:h-72 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-white/30 text-sm">
              Image / video
            </div>

            <div class="text-overlay border border-white/20 rounded-lg p-5">
              <h3 class="font-semibold mb-3 text-center border-b border-white/10 pb-2">Tech Stack</h3>
              <ul class="grid grid-cols-2 gap-x-4 gap-y-1.5">
                <li v-for="tech in activeProject.techStack" :key="tech" class="text-sm text-white/70">• {{ tech }}</li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>

      <div class="flex justify-between mt-6">
        <button class="text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/50 rounded-lg px-4 py-2 transition" @click="step(-1)">← Prev</button>
        <button class="text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/50 rounded-lg px-4 py-2 transition" @click="step(1)">Next →</button>
      </div>
    </div>
  </div>
</template>