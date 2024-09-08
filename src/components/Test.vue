<template>
  <TestChild :name="name" :obj="obj" />
  <h1>{{ name }}</h1>
  <h1>{{ obj }}</h1>
  <button @click="onClick">Click</button>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import TestChild from './TestChild.vue'

const name = ref()
const obj = ref({ a: 2, b: 3 })

function onClick() {
  name.value = 'name2'
  obj.value.c = 4
}
</script>

<style scoped></style>
