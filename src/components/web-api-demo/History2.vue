<template>
  <div class="container" :class="{ loading: isLoading }">
    <div class="btn-list">
      <button @click="navigateTo(1)">妙蛙種子</button>
      <button @click="navigateTo(4)">小火龍</button>
      <button @click="navigateTo(7)">傑尼龜</button>
    </div>
    <template v-if="name">
      <h1>{{ name }}</h1>
      <img :src="img" width="500" height="500" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(false)
const name = ref('')
const img = ref('')

onMounted(() => {
  fetchData(1)

  window.onpopstate = event => {
    const { id } = event.state

    fetchData(id)
  }
})

async function fetchData(id: number) {
  try {
    isLoading.value = true
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()

    ;[name.value, img.value] = [data.name, data.sprites.other.dream_world.front_default]
  } finally {
    isLoading.value = false
  }
}

async function navigateTo(id: number) {
  const state = { id }

  fetchData(id)
  history.pushState(state, '', `/${id}`)
}
</script>

<style>
.container.loading {
  opacity: 0.5;
  pointer-events: none;
}

.btn-list {
  display: flex;
  gap: 12px;
}
</style>
