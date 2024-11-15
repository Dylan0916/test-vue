<template>
  <button @click="onClick">click</button>
  <TestChild v-if="flag" />
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'

import TestChild from './TestChild.vue'

const flag = ref(false)

function onClick() {
  flag.value = !flag.value
}
</script>

<style scoped></style>
