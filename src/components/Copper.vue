<template>
  <div>
    <input type="file" accept="image/*" @change="handleFileChange" />
    <div class="cropper-container" />
    <button @click="cropImage">裁切圖片</button>
    <div v-if="croppedUrl">
      <h4>裁切結果：</h4>
      <img :src="croppedUrl" style="max-width: 100%; border: 1px solid #ccc" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Cropper from 'cropperjs'

import testImg from '/public/test-img.jpg'

const imageRef = ref<HTMLImageElement | null>(null)
const cropper = ref<Cropper | null>(null)
const croppedUrl = ref<string>('')

function handleFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const reader = new FileReader()
    reader.onload = ev => {
      if (imageRef.value) {
        imageRef.value.src = ev.target?.result as string
      }
    }
    reader.readAsDataURL(target.files[0])
  }
}

function cropImage() {
  if (cropper.value) {
    const cropperCanvas = cropper.value.getCropperCanvas()
    cropperCanvas?.$toCanvas().then((canvas: HTMLCanvasElement) => {
      croppedUrl.value = canvas.toDataURL()
    })
  }
}

onMounted(() => {
  /* if (imageRef.value) {
    cropper.value = new Cropper(imageRef.value, {
      autoCropArea: 1,
    })
    cropper.value.setAspectRatio(1)
    cropper.value.viewMode = 1
  } */

  const image = new Image()

  image.src = testImg
  image.alt = 'Picture'

  cropper.value = new Cropper(image, {
    container: '.cropper-container',
  })

  console.log(cropper.value)
})
</script>

<style lang="scss">
.cropper-container {
  :root {
    --theme-color: white;
  }

  border: 1px solid var(--vp-c-divider);
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 1.25rem 1.5rem;

  cropper-canvas {
    height: 360px;
  }
}

cropper-selection {
  cropper-handle:after {
    width: 10px;
    height: 10px;
    // background: white; /* 改成橘色 */
  }
}
</style>
