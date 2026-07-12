<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'
import { bachelorsYears, mastersModules, courses } from '../data/education'

const openModal = ref<string | null>(null)
const activeYear = ref(bachelorsYears[0].id)

const nodes = [
  { id: 'leaving-cert', label: 'Leaving Cert', subtitle: 'Secondary Education - 446 Points Leaving Cert' },
  { id: 'bachelors', label: 'Bachelors', subtitle: 'Computer Science International — TU Dublin, 2021–2025' },
  { id: 'masters', label: 'Masters', subtitle: 'Advanced Software Development — TU Dublin, 2025–2026' },
  { id: 'courses', label: 'Courses / Certs', subtitle: 'Security, AWS, and more' },
]
</script>

<template>
  <!-- Mobile: simple stacked list -->
  <div class="md:hidden flex flex-col gap-4">
    <button
      v-for="node in nodes"
      :key="node.id"
      class="border border-white/20 rounded-lg p-4 text-left hover:bg-white/10"
      @click="openModal = node.id"
    >
      <p class="font-semibold">{{ node.label }}</p>
      <p class="text-sm text-white/60">{{ node.subtitle }}</p>
    </button>
  </div>

  <!-- Desktop: roadmap -->
  <div class="hidden md:block relative w-full h-[500px]">
    <svg class="absolute inset-0 w-full h-full pointer-events-none" fill="none" stroke="white" stroke-opacity="0.3">
      <line x1="150" y1="80" x2="450" y2="80" />
      <line x1="450" y1="80" x2="450" y2="220" />
      <line x1="450" y1="220" x2="250" y2="220" />
      <line x1="250" y1="220" x2="250" y2="360" />
      <line x1="250" y1="360" x2="450" y2="360" />
    </svg>

    <button
      class="absolute top-[55px] left-[50px] w-48 border border-white/30 rounded-lg bg-white/10 p-3 text-left hover:bg-white/20 transition"
      @click="openModal = 'leaving-cert'"
    >
      <p class="font-semibold">Leaving Cert</p>
      <p class="text-xs text-white/60">Secondary Education </p>
      <p class="text-xs text-white/60">446 Points Leaving Cert </p>
      
    </button>

    <button
      class="absolute top-[55px] left-[400px] w-52 border border-white/30 rounded-lg bg-white/10 p-3 text-left hover:bg-white/20 transition"
      @click="openModal = 'bachelors'"
    >
      <p class="font-semibold">Bachelors</p>
      <p class="text-xs text-white/60">Computer Science International - TU Dublin 2:1</p>
    </button>

    <button
      class="absolute top-[195px] left-[200px] w-52 border border-white/30 rounded-lg bg-white/10 p-3 text-left hover:bg-white/20 transition"
      @click="openModal = 'masters'"
    >
      <p class="font-semibold">Masters</p>
      <p class="text-xs text-white/60">Adv. Software Development - TU Dublin (In progress 1:1 Track)</p>
    </button>

    <button
      class="absolute top-[335px] left-[400px] w-52 border border-white/30 rounded-lg bg-white/10 p-3 text-left hover:bg-white/20 transition"
      @click="openModal = 'courses'"
    >
      <p class="font-semibold">Courses / Certs</p>
      <p class="text-xs text-white/60">Security, AWS, and more</p>
    </button>
  </div>

  <!-- Modals -->
  <Modal :open="openModal === 'leaving-cert'" title="Leaving Cert" @close="openModal = null">
    <p class="text-white"> My 7 Subjects. Only Irish was Ordinary level </p>
    <ul class="text-white/80">
        English, Irish, maths, History, German, Geograghy and Physics
    </ul>
  </Modal>

  <Modal :open="openModal === 'bachelors'" title="Bachelors - CS International, TU Dublin" @close="openModal = null">
    <div class="flex gap-2 flex-wrap mb-4">
      <button
        v-for="year in bachelorsYears"
        :key="year.id"
        class="px-3 py-1 rounded text-sm border"
        :class="activeYear === year.id ? 'bg-white/20 border-white/40' : 'border-white/20 text-white/60'"
        @click="activeYear = year.id"
      >
        {{ year.label }}
      </button>
    </div>
    <table class="w-full text-sm p-5">
      <thead><tr class="text-left text-white/60"><th class="pb-2">Module</th><th class="pb-2">Grade</th></tr></thead>
      <tbody>
        <tr v-for="mod in bachelorsYears.find(y => y.id === activeYear)?.modules" :key="mod.name" class="border-t border-white/10">
          <td class="py-1">{{ mod.name }}</td>
          <td class="py-1">{{ mod.grade ?? '—' }}</td>
        </tr>
      </tbody>
    </table>
    <h3 class="font-semibold mb-1 pt-4 ">Comments throughout the Experience</h3>
    <p class="text-white/80 text-sm "> My 3rd year was split in 2 halves 1 part in Ireland and the other I Studied at H_da Darmstadt, Germany. I got exposed to Multitouch which was probably my favourite module in my Bachelors. 
        For my Final Year Project I create a Website to deal with procrasination with Gameification techniques to encourage the creation of good habits through systems like leaderboards, daily login and achievements.
    </p>
  </Modal>

  <Modal :open="openModal === 'masters'" title="Masters - Advanced Software Development" @close="openModal = null">
    <table class="w-full text-sm mb-4">
      <thead><tr class="text-left text-white/60"><th class="pb-2">Module</th><th class="pb-2">Grade</th></tr></thead>
      <tbody>
        <tr v-for="mod in mastersModules" :key="mod.name" class="border-t border-white/10">
          <td class="py-1">{{ mod.name }}</td>
          <td class="py-1">{{ mod.grade ?? '—' }}</td>
        </tr>
      </tbody>
    </table>
    <h3 class="font-semibold mb-1">Dissertation</h3>
    <p class="text-white/80 text-sm"> Carbon Aware Cloud, testing how efficent different regions in Europe/Na and Asia are at being green.</p>
  </Modal>

  <Modal :open="openModal === 'courses'" title="Courses / Certifications" @close="openModal = null">
    <table class="w-full text-sm">
      <thead><tr class="text-left text-white/60"><th class="pb-2">Course</th><th class="pb-4">Provider</th><th class="pb-2 pr-15">Date</th></tr></thead>
      <tbody>
        <tr v-for="c in courses" :key="c.name" class="border-t border-white/10 ">
          <td class="py-1">{{ c.name }}</td>
          <td class="py-1">{{ c.provider }}</td>
          <td class="py-1">{{ c.date }}</td>
        </tr>
      </tbody>
    </table>
  </Modal>
</template>