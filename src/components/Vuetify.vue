<template>
  <div>
    <v-text-field class="text-input w-200px" hide-details="auto" label="Main input" />
    <v-select
      class="w-200px"
      label="Select"
      :items="['California', 'Colorado Colorado Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>
    <v-textarea
      rows="3"
      color="orange50"
      variant="outlined"
      class="notes-field"
      hide-details
      row-height="10"
      :placeholder="'Please fill in remarks'"
      :maxlength="600"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.text-input :deep(.v-field__input) {
  @apply truncate;
}
</style>
