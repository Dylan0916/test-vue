<template>
  <component :is="rootComponent" :class="classes" :disabled="props.disabled || props.loading" :href="props.to" v-bind="omit(attrs, ['class'])">
    <p v-if="props.loading" class="absolute top-1/2 left-1/2 -translate-1/2">l...</p>
    <template v-if="props.type === 'icon'">
      <i :class="textClasses">O</i>
    </template>
    <span v-if="props.type !== 'icon'" class="app-btn-text flex-0" :class="textClasses"><slot>Button</slot></span>
  </component>
</template>

<script setup lang="ts">
import { type HTMLAttributes, computed, useAttrs } from 'vue'
import { type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { omit } from 'lodash-es'

import { buttonVariants } from '@/utils/components'

type BtnType = NonNullable<VariantProps<typeof buttonVariants>['type']>
type BtnSize = NonNullable<VariantProps<typeof buttonVariants>['size']>

interface ButtonProps {
  type?: BtnType
  size?: BtnSize
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

defineOptions({ inheritAttrs: false })

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

const attrs = useAttrs()

const rootComponent = computed(() => (typeof props.to === 'undefined' ? 'button' : 'a'))
const classes = computed(() => {
  const variantClasses = buttonVariants({ type: props.type, size: props.size })
  const sizeClasses = {
    mini: 'btn-xs',
    small: 'btn-sm',
    medium: 'btn-md',
    large: 'btn-lg',
  }
  const additionalClasses = [
    `btn-${props.type}`,
    sizeClasses[props.size],
    props.icon && props.iconPosition === 'right' && 'flex-row-reverse',
    props.center && 'justify-center',
    props.block && 'w-full',
    props.bordered && 'ring-1',
    props.loading && 'btn-loading',
    attrs.class as HTMLAttributes['class'],
  ]

  return twMerge(variantClasses, additionalClasses)
})
const lineClampClasses = computed(() => (props.truncateText ? ['whitespace-normal', 'line-clamp-1'] : ['whitespace-nowrap']))

const textClasses = computed(() => [{ 'opacity-0': props.loading }, lineClampClasses.value, props.textClass])
</script>
