<template>
  <TestChild :model-value="testValue" @update:model-value="foo" />
  <h3>{{ testValue }}</h3>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue'
import TestChild from './TestChild.vue'

const testValue = ref('')

function foo(value: string) {
  testValue.value = value
}
</script>

<style scoped></style>
