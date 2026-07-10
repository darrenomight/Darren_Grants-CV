<script setup lang="ts">
import Cloud from '../assets/about/images/Cloud.png'
import Unity from '../assets/about/images/Unity.png'
import Erasmus from '../assets/about/images/h_da.png'
import Darren from '../assets/about/images/DarrenGrants.jpg'

const sections = [
  {
    text: `My name is Darren Grants. I am currently, as of the day of writing, doing my Masters in TU Dublin studying Advanced Software Development.
    I've been working with computers and tech since I was young, starting with the Playstation 2, the Wii, Xbox 360, and on until I finally built my own PC. I recently upgraded my PC and turned my first rig into a home server that runs Minecraft servers for friends, a Jellyfin instance for media, and just handy extra storage. I have plans to expand that project but not currently.`,
    imageSide: 'left',
    image: Darren,
  },
  {
    text: `My first exposure to coding was around 2018 when I started with a basic Unity tutorial pushing a ball around, and that just always clicked an interest in programming and a liking of the problem solving aspect of it. I remember coding in basic HTML5 and CSS, making a website and having no clue how to even host it or what JS even was. To this day, when I learned how teleporting systems worked in games, my mind was blown. I'll always remember that day, coding my own basic teleporter myself.`,
    imageSide: 'right',
    image: Unity,
  },
  {
    text: `With my study of Computer Science International for my undergrad in TU Dublin (Bachelors), I was exposed to websites, algorithms, APIs, data designs and many other areas. I had a great opportunity to travel to Darmstadt in 2024 as part of Erasmus, spending 6 months learning in Germany, and learning more and more about the wide and creative aspects of Computer Science. You can go to my Projects section to see what I've worked on or dabbled in, and my education formally in its respective area.
    `,
    imageSide: 'left',
    image: Erasmus,
    fit: 'contain',
  },
  {
    text: `Currently I am interested in cloud providers and tech surrounding the public cloud. Audio visualisation / data are a fascination ever since Germany, and I'm always interested in the steps and advancements in gaming, tech and overall software and hardware.`,
    imageSide: 'right',
    image: Cloud,
  },
]

const lastUpdated = '10/07/2026'
</script>

<template>
  <div class="max-w-3xl mx-auto p-8 text-white text-overlay my-6 mx-4 md:mx-auto">
    <h1 class="text-3xl font-bold mb-8">About Myself - Darren Grants</h1>

    <div
  v-for="(section, i) in sections"
  :key="i"
  class="flex flex-col gap-6 mb-12 md:gap-8"
  :class="section.imageSide === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'"
>
  <img
    :src="section.image"
    :alt="section.text.slice(0, 30)"
    class="w-full md:w-60 h-60 flex-shrink-0 rounded-lg object-cover border border-white/20 bg-white "
    :class="section.fit === 'contain' ? 'object-contain' : 'object-cover'"
  />
  <p class="text-white/80 leading-relaxed whitespace-pre-line">
    {{ section.text }}
  </p>
</div>

    <div class="inline-block border border-white/20 rounded-lg px-4 py-2 text-sm text-white/60">
      Last Updated: {{ lastUpdated }}
    </div>
  </div>
</template>