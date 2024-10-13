<template>
  <!-- <SpeechRecognition /> -->
  <!-- <SpeechSynthesisUtterance /> -->
  <ScreenCapture />
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'

import SpeechRecognition from './js-api-demo/SpeechRecognition.vue'
import SpeechSynthesisUtterance from './js-api-demo/SpeechSynthesisUtterance.vue'
import ScreenCapture from './js-api-demo/ScreenCapture.vue'
</script>

<style scoped></style>
