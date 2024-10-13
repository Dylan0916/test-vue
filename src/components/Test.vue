<template>
  <!-- <SpeechRecognition /> -->
  <!-- <SpeechSynthesisUtterance /> -->
  <!-- <ScreenCapture /> -->
  <Cryptography />
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'

import SpeechRecognition from './js-api-demo/SpeechRecognition.vue'
import SpeechSynthesisUtterance from './js-api-demo/SpeechSynthesisUtterance.vue'
import ScreenCapture from './js-api-demo/ScreenCapture.vue'
import Cryptography from './js-api-demo/Cryptography.vue'
</script>

<style scoped></style>
