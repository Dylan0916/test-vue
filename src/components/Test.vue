<template>
  <!-- <SpeechRecognition /> -->
  <!-- <SpeechSynthesisUtterance /> -->
  <!-- <ScreenCapture /> -->
  <!-- <Cryptography /> -->
  <!-- <History /> -->
  <!-- <History2 /> -->
  <!-- <Battery /> -->
  <!-- <Share /> -->
  <!-- <PaymentRequest /> -->
  <ShowOpenFilePicker />
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'

import SpeechRecognition from './js-api-demo/SpeechRecognition.vue'
import SpeechSynthesisUtterance from './js-api-demo/SpeechSynthesisUtterance.vue'
import ScreenCapture from './js-api-demo/ScreenCapture.vue'
import Cryptography from './js-api-demo/Cryptography.vue'
import History from './js-api-demo/History.vue'
import History2 from './js-api-demo/History2.vue'
import Battery from './js-api-demo/Battery.vue'
import Share from './js-api-demo/Share.vue'
import PaymentRequest from './js-api-demo/PaymentRequest.vue'
import ShowOpenFilePicker from './js-api-demo/ShowOpenFilePicker.vue'
</script>

<style scoped></style>
