<template>
  <div>
    <DatePicker v-model.string="date" v-bind="datePickerProps">
      <template #day-content="{ day, dayEvents, dayProps }">
        <div
          v-on="dayEvents"
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
          "
        >
          <span>{{ day.label }}</span>
          <span>$599</span>
        </div>
      </template>
    </DatePicker>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue';
import { DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

const date = ref('2024-03-25');

const datePickerProps = computed(() => ({
  // v-calendar locale map: https://github.com/nathanreyes/v-calendar/blob/master/src/utils/defaults/locales.js#L3
  expanded: true,
  borderless: true,
  color: 'green',
  masks: {
    modelValue: 'YYYY-MM-DD',
  },
  dragAttribute: {
    highlight: {
      start: {
        fillMode: 'solid' as const,
      },
      base: {
        fillMode: 'light' as const,
      },
      end: {
        fillMode: 'solid' as const,
      },
    },
  },
}));

watchEffect(() => {
  console.log('== date ==', date.value);
});
</script>

<style scoped>
:deep(.vc-day-layer.vc-highlights) {
  top: -22px;
}
</style>
