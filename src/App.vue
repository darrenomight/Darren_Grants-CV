<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ContactModal from './components/ContactModal.vue'

const contactOpen = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col gradient-animated">
    <Header @open-contact="contactOpen = true" />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
    <ContactModal :open="contactOpen" @close="contactOpen = false" />
  </div>
</template>