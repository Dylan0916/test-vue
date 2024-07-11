<template>
  <input v-for="(_, index) in inputs" :key="index" v-model="inputs[index]" ref="inputRefs" @focus="handleFocus" />
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue'

const inputs = reactive(['', '', '', ''])
const inputRefs = ref<HTMLInputElement[]>([])

function handleFocus() {
  const foundFirstEmptyIndex = inputs.findIndex((v) => !v)
  const focusIndex = foundFirstEmptyIndex === -1 ? inputRefs.value.length - 1 : foundFirstEmptyIndex

  inputRefs.value[focusIndex]?.focus()
}
</script>

<style scoped></style>
