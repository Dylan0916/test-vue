<template>
  <div>
    <button @click="onClick">click</button>
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
