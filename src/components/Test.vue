<template>
  <div>
    <button @click="execute">execute</button>
    <!-- <button
      :data-testid="testIds.scope.somePage"
      class="123"
      :class="{
        '123': true,
        '456': false,
      }"
      @click="
        () => {
          console.log('123')
        }
      "
    >
      click
    </button>
    <button
      data-testid="test-id123"
      class="123"
      @click="
        () => {
          console.log('123')
        }
      "
    >
      click2
    </button> -->
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref, watch } from 'vue'
import { useAsyncState } from '@vueuse/core'

import { ResultError } from '../utils/common'

function fetcher() {
  return axios
    .get('https://run.mocky.io/v3/e7001328-41be-4a2f-88b7-2dcb75ca8638')
    .then(res => res.data)
    .catch(e => Promise.reject(new ResultError(e.code, e.message, e)))
}

const { state, execute } = useAsyncState(fetcher, null, { immediate: false, onError })

function onError(e: unknown) {
  console.log(e)
  console.log(e instanceof ResultError)
}
</script>
