<template>
  <input ref="inputRef" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { inputMethods } from '../constants'

const inputRef = ref<any>(null)

const exposedInputMethods = inputMethods.reduce((acc, method) => {
  acc[method] = () => inputRef.value?.[method]()

  return acc
}, {} as any)

defineExpose({ ...exposedInputMethods })
</script>

<style scoped></style>
