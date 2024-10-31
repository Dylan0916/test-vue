<template>
  <div>
    <button v-for="n in 10" :key="n" @click="pushState(n)">pushState - {{ n }}</button>
    <hr />
    <button @click="replaceState">replaceState</button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

function pushState(n: number) {
  history.pushState({ prev: window.location.pathname }, '', `/test-push-state-${n}`)
}

function replaceState() {
  history.replaceState({ prev: window.location.pathname }, '', '/test-replace-state')
}

onMounted(() => {
  window.onpopstate = function (event) {
    console.log(event.state)
  }
})
</script>
