<script setup lang="ts">
import { ref } from 'vue'

import VCalendar from './components/VCalendar.vue'
import Test from './components/Test.vue'
import VeeValidate from './components/VeeValidate.vue'
import Proxy from './components/Proxy.vue'
import WebApi from './components/WebApi.vue'

const keyword = ref('')
</script>

<template>
  <!-- <VCalendar /> -->
  <Test v-model:keyword="keyword" />
  <h1>{{ keyword }}</h1>
  <!-- <VeeValidate /> -->
  <!-- <Proxy /> -->
  <!-- <WebApi /> -->
</template>

<style scoped></style>
