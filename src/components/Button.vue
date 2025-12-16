<template>
  <component :is="rootComponent" class="btn relative" :class="classes" :disabled="props.disabled || props.loading" :href="props.to">
    <p v-if="props.loading" class="absolute top-1/2 left-1/2 -translate-1/2">l...</p>
    <template v-if="props.type === 'icon'">
      <i :class="textClasses">O</i>
    </template>
    <span v-if="props.type !== 'icon'" class="app-btn-text flex-0" :class="textClasses"><slot>Button</slot></span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type BtnType = 'primary' | 'secondary' | 'tertiary' | 'default' | 'ghost' | 'text' | 'primary-text' | 'custom' | 'icon'

interface ButtonProps {
  type?: BtnType
  size?: 'mini' | 'small' | 'medium' | 'large'
  icon?: string
  iconPosition?: 'left' | 'right'
  iconColor?: string
  textClass?: string | any[]
  center?: boolean
  block?: boolean
  bordered?: boolean
  loading?: boolean
  disabled?: boolean
  truncateText?: boolean
  to?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  iconPosition: 'left',
  iconColor: 'black',
  center: true,
  block: false,
  bordered: false,
  loading: false,
  truncateText: false,
})

const rootComponent = computed(() => (typeof props.to === 'undefined' ? 'button' : 'a'))
const classes = computed(() => {
  const sizeClasses = {
    mini: 'btn-xs',
    small: 'btn-sm',
    medium: 'btn-md',
    large: 'btn-lg',
  }
  const typeClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary',
    default: 'btn-default',
    ghost: 'btn-ghost',
    text: 'btn-text',
    custom: 'btn-custom',
    'primary-text': 'btn-primary-text',
    icon: 'btn-icon',
  }

  return [
    sizeClasses[props.size],
    typeClasses[props.type],
    props.icon && props.iconPosition === 'right' && 'flex-row-reverse',
    props.center && 'justify-center',
    props.block && 'w-full',
    props.bordered && 'ring-1',
    props.loading && 'btn-loading',
  ]
})

const lineClampClasses = computed(() => (props.truncateText ? ['whitespace-normal', 'line-clamp-1'] : ['whitespace-nowrap']))

const textClasses = computed(() => [{ 'opacity-0': props.loading }, lineClampClasses.value, props.textClass])
</script>

<style lang="scss" scoped>
/* https://www.figma.com/file/UnOBJd1UtkeEccupL0ZrYs/eatigo-APP?node-id=2283%3A40068&mode=dev */
.btn {
  @apply text-lg ring-inset rounded transition-colors cursor-pointer disabled:cursor-default flex items-center flex-nowrap gap-2;
  &:not(&.btn-custom) {
    @apply px-4 py-2;
  }
}
.btn-xs {
  @apply text-sm gap-0.5;
  &:not(&.btn-custom) {
    @apply px-3 py-0.5;
  }
}
.btn-sm {
  @apply text-base gap-1;
  &:not(&.btn-custom) {
    @apply px-3 py-1;
  }
}
.btn-primary {
  @apply text-white bg-red-50 hover:bg-red-60 active:bg-red-80 disabled:[&:not(.btn-loading)]:(bg-red-20 text-gray-10);
}
.btn-secondary {
  @apply text-black-50 bg-white ring-1 ring-gray-50 active:(text-red-50 ring-red-50) disabled:(text-gray-60 ring-gray-60);
  &.active {
    @apply text-red-50 ring-red-50;
  }
}
.btn-tertiary {
  @apply text-black-50 bg-gray-20  ring-gray-50  disabled:(text-gray-60 ring-gray-60);
}
.btn-default {
  &.active {
    @apply text-red-50;
  }
}
.btn-ghost {
  @apply text-black-50 bg-transparent hover:bg-gray-20 active:bg-gray-40 disabled:text-gray-60 disabled:bg-transparent;
}
.btn-text {
  @apply text-black-50 bg-transparent hover:bg-gray-20 active:bg-gray-40 disabled:text-gray-60 disabled:bg-transparent;
  &.active {
    @apply text-red-50;
  }
}
.btn-primary-text {
  @apply text-red-50 bg-transparent disabled:text-gray-60 disabled:bg-transparent;
}
.btn-icon {
  @apply bg-transparent hover:bg-gray-20 active:bg-gray-40 disabled:text-gray-60 disabled:bg-transparent;
  &:not(&.btn-custom) {
    @apply p-2;
  }
  &.btn-lg:not(&.btn-custom) {
    @apply p-2.5;
  }
  &.btn-sm:not(&.btn-custom) {
    @apply p-1.5;
  }
  &.btn-xs:not(&.btn-custom) {
    @apply p-1;
  }
}
</style>
