<template>
  <div>
    <header class="contents">
      <p class="h-10 sticky top-0">1</p>
      <p class="h-10">2</p>
      <p class="h-10 sticky top-10">3</p>
      <p class="h-10">4</p>
      <p class="h-10 sticky top-20">5</p>
      <p class="h-10">6</p>
    </header>
    <div class="border border-red-500 h-300">content</div>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref, watch } from 'vue'
import { useAsyncState } from '@vueuse/core'
import { get } from 'lodash-es'

function onClick() {
  console.log(get({ a: 1 }, 'a'))
}
</script>
