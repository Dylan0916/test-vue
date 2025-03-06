<template>
  <div>
    <p class="w-min-1">123</p>
    <button
      @click="
        () => {
          ref1 = !ref1
          ref2 = !ref2
        }
      "
    >
      Click
    </button>
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
import { ref, watch } from 'vue'

const ref1 = ref(false)
const ref2 = ref(false)

watch(ref1, foo)
watch(ref2, foo)

function foo() {
  console.log('== foo ==')
}
</script>
