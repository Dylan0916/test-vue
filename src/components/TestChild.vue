<template>
  <TestChild2 ref="test2Ref" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TestChild2 from './TestChild2.vue'
import { inputMethods } from '../constants'

const test2Ref = ref<any>(null)

const exposedInputMethods = new Proxy({}, { get: (_, prop) => () => test2Ref.value[prop] })
// const exposedInputMethods = inputMethods.reduce((acc, method) => {
//   acc[method] = () => test2Ref.value?.[method]()

//   return acc
// }, {} as any)

// defineExpose({ ...exposedInputMethods })
defineExpose(exposedInputMethods)
</script>

<style scoped></style>
