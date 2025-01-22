<template>
  <div>
    <button @click="onClick">click</button>
    <div class="wd-flex wd-items-center wd-justify-center wd-flex-col wd-h-14 wd-py-1 !wd-text-gray60 !wd-bg-orange50">123</div>
  </div>
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
