<template>
  <div>
    <template v-if="battery">
      <p>電池狀態：{{ battery.charging }}</p>
      <p>當前電量：{{ battery.level * 100 }}%</p>
      <p>充滿電的時間：{{ battery.chargingTime }} 秒</p>
      <p>還能用的時間：{{ battery.dischargingTime }} 秒</p>
    </template>
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { ref, onMounted } from 'vue'

const battery = ref(null)

onMounted(async () => {
  const _battery = await navigator.getBattery()

  console.log(_battery)

  battery.value = _battery
})
</script>
