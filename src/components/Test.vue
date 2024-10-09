<template>
  <h1>{{ obj1 }}</h1>
  <h1>{{ obj2 }}</h1>
  <h1>{{ obj3 }}</h1>
  <h1>{{ obj4 }}</h1>
  <button @click="onClick">Click</button>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import TestChild from './TestChild.vue'

const obj1 = ref({ a: 1, b: 2, c: [] as number[] })
const obj2 = reactive({ a: 1, b: 2, c: [] as number[] })
const obj3 = computed(() => ({ a: obj1.value.a }))
const obj4 = computed(() => ({ a: obj2.a }))

watch(
  obj1,
  (newVal, oldVal) => {
    console.log('obj1 changed', newVal, oldVal)
  },
  { deep: true }
)
watch(obj2, (newVal, oldVal) => {
  console.log('obj2 changed', newVal, oldVal)
})
watch(obj3, (newVal, oldVal) => {
  console.log('obj3 changed', newVal, oldVal)
})
watch(obj4, (newVal, oldVal) => {
  console.log('obj4 changed', newVal, oldVal)
})

function onClick() {
  obj1.value.a = 2
  obj2.a = 2
}
</script>

<style scoped></style>
