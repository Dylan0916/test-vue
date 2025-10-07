<template>
  <div>
    <div :class="testClass">execute</div>
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
import get from 'lodash-es/get'

import { testClass } from '../constants'

console.log(get({ a: 1 }, 'a'))
</script>
