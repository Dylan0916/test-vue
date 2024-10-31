<template>
  <div>
    <h1>canShare: {{ canShare }}</h1>
    <template v-if="canShare">
      <button @click="share">share</button>
      <p v-if="isSharing">Sharing...</p>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const shareData = {
  title: '這是抬頭',
  text: '這是內容',
  url: window.location.href,
}

const canShare = ref(false)
const isSharing = ref(false)

onMounted(() => {
  try {
    canShare.value = navigator.canShare(shareData)
  } catch {
    //
  }
})

async function share() {
  try {
    isSharing.value = true
    await navigator.share(shareData)
  } finally {
    isSharing.value = false
  }
}
</script>
