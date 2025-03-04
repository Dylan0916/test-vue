<template>
  <div>
    <p class="w-min-1">123</p>
    <button
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
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import testIds from '../../public/test-ids.json'

export default defineComponent({
  name: 'Test',
  setup() {
    return {
      testIds,
    }
  },
})
</script>
