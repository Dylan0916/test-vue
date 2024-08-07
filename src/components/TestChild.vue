<template>
  <input :value="props.modelValue" @input="onInput" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TestChild2 from './TestChild2.vue'

interface Props {
  modelValue: string
}
interface Emits {
  (event: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

function onInput(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<style scoped></style>
