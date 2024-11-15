<template>
  <div>Test child</div>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue'

watchEffect(onCleanup => {
  console.log('== onMounted ==')

  onCleanup(() => {
    console.log('== onCleanup ==')
  })
})
</script>

<style></style>
