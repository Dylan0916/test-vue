<template>
  <TestChild ref="testRef" />
  <button @click="onClick">click</button>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue'
import TestChild from './TestChild.vue'

const testRef = ref(null)

function onClick() {
  console.log('== testRef ==', testRef.value)
  console.log('== focus ==', testRef.value.focus)

  testRef.value?.focus?.()
}
</script>

<style scoped></style>
