<template>
  <button @click="onClick">click</button>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'

const input1 = ref('')
const input2 = defineModel()

function onClick() {}
</script>

<style scoped></style>
