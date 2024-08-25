<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'

type AnimatedNumberOption = {
  duration: number
  speed?: never
} | {
  duration?: never
  speed: number
}
const props = defineProps<{
  label?: string
  option?: AnimatedNumberOption
  value: number
}>()

const counter = ref(0)
let timer

function launch() {
  const animate = () => {
    const part = props.option?.speed ? props.option.speed : (props.option?.duration ?? 1000)
    const increment = props.value / part

    if (counter.value < props.value) {
      counter.value += increment
      timer = setTimeout(animate, 1)
    } else {
      counter.value = props.value
    }
  }
  animate()
}

onMounted(() => {
  launch()
})

onUnmounted(() => {
  clearTimeout(timer)
})

watch(() => props.value, () => {
  counter.value = 0
  launch()
})
</script>

<template>
  <div class="number">
    <span>{{ Math.ceil(counter) }}</span>
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<style scoped>
.number {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.number > span:nth-child(1) {
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
}
</style>
