<template>
  <button @click="onClick">click</button>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'

const input1 = ref('')
const input2 = defineModel<string>({ default: '' })

function onClick() {
  input1.value = '1'
  input2.value = '1'

  console.log(input1.value, input2.value)
}
</script>

<style scoped></style>
