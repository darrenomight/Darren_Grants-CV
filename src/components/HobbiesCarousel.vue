<script setup lang="ts">
import { ref } from 'vue'
import { hobbies } from '../data/hobbies'

const activeIndex = ref(0)
const total = hobbies.length

function next() {
    activeIndex.value = (activeIndex.value + 1) % total
}
function prev() {
    activeIndex.value = (activeIndex.value - 1 + total) % total
}
function goTo(i: number) {
    activeIndex.value = i
}

// shortest circular distance so it wraps both directions
function diff(i: number) {
    let d = i - activeIndex.value
    if (d > total / 2) d -= total
    if (d < -total / 2) d += total
    return d
}

function cardStyle(i: number) {
  const d = diff(i)
  const abs = Math.abs(d)

  if (abs > 3) {
    return { opacity: 0, pointerEvents: 'none' as const, zIndex: 0 }
  }

  const percentX = d * 42
  const extraPx = d * 60
  const scale = 1 - abs * 0.1
  const rotateY = Math.max(-28, Math.min(28, d * -14))
  const opacity = abs === 0 ? 1 : Math.max(0.25, 1 - abs * 0.28)

  return {
    transform: `translateX(calc(${percentX}% + ${extraPx}px)) scale(${scale}) rotateY(${rotateY}deg)`,
    opacity,
    zIndex: 10 - abs,
    backgroundColor: abs === 0 ? 'rgba(8, 18, 36, 0.95)' : undefined,
  }
}

</script>

<template>
    <div class="w-full">
        <div class="relative w-full h-[620px] md:h-[540px]" style="perspective: 1200px;">
            <div class="absolute inset-0 flex items-center justify-center">
                <div v-for="(hobby, i) in hobbies" :key="hobby.id" class="absolute w-64 h-[22rem] md:w-80 md:h-[30rem] rounded-xl border border-white/20 bg-white/10
             backdrop-blur-sm p-5 cursor-pointer transition-all duration-[400ms] ease-out
             flex flex-col" :style="cardStyle(i)" @click="goTo(i)">
                    <div class="w-full h-32 md:h-44 rounded-lg bg-white/10 border border-white/10 flex-shrink-0
                  flex items-center justify-center text-white/30 text-xs mb-3 overflow-hidden">
                        <img v-if="hobby.image" :src="hobby.image" :alt="hobby.name"
                            class="w-full h-full object-cover" />
                        <span v-else>Image</span>
                    </div>
                    <h3 class="text-white font-semibold text-center mb-2 text-base md:text-lg">{{ hobby.name }}</h3>
                    <p v-if="diff(i) === 0" class="text-white/70 text-sm leading-relaxed">
                        {{ hobby.description }}
                    </p>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center gap-6 mt-4">
            <button class="text-white/70 hover:text-white text-xl px-3" @click="prev">←</button>
            <span class="text-white/50 text-sm">{{ activeIndex + 1 }} / {{ total }}</span>
            <button class="text-white/70 hover:text-white text-xl px-3" @click="next">→</button>
        </div>
    </div>
</template>