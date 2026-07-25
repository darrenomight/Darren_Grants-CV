<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ContactModal from './components/ContactModal.vue'

const route = useRoute()
const contactOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col gradient-animated">
    <Header @open-contact="contactOpen = true" />

    <div v-if="route.name === 'landing'" class="text-center mt-10 px-4">
      <h1 class="text-3xl font-bold text-white">Welcome To Darren Grants Website</h1>
      <p class="text-white/70 mt-1">Software Engineer - Cloud Fascinated - Programmer </p>
    </div>

    <main class="flex-1">
      <router-view />
    </main>
    <Footer />

    <ContactModal :open="contactOpen" @close="contactOpen = false" />
  </div>
</template>