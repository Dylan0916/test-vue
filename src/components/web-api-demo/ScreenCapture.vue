<template>
  <div>
    <button @click="start">分享螢幕</button>
    <button @click="stop">停止分享</button>
    <br />
    <video v-show="isSharing" ref="screenVideo" autoplay class="video" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isSharing = ref(false)
const screenVideo = ref<HTMLVideoElement | null>(null)

async function start() {
  if (!screenVideo.value) {
    return
  }

  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: false,
  })

  screenVideo.value.srcObject = stream
  isSharing.value = true
}

function stop() {
  if (!screenVideo.value) {
    return
  }

  const stream = screenVideo.value.srcObject as MediaStream

  stream.getTracks().forEach((track) => track.stop())
  isSharing.value = false
}
</script>

<style lang="css" scoped>
.video {
  width: 100%;
  height: 90dvh;
}
</style>
