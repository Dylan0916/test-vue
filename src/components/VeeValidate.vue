<template>
  <form @submit="onSubmit">
    <div>
      <label>Email</label>
      <input v-model="email" v-bind="emailAttrs" type="text" />
    </div>
    <div>
      <label>Password</label>
      <input v-model="password" v-bind="passwordAttrs" type="password" />
    </div>
    <hr />
    <button :disabled="isDisabled">Sign up for newsletter</button>
    <hr />
    <pre>meta: {{ meta }}</pre>
    <hr />
    <pre>values: {{ values }}</pre>
    <hr />
    <pre>errors: {{ errors }}</pre>
    <hr />
  </form>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue'
import { useForm, defineRule, configure, type LazyComponentBindsConfig } from 'vee-validate'
import { object as yupObject, string } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'

const { values, errors, meta, defineField, handleSubmit, submitCount } = useForm({
  validationSchema: toTypedSchema(
    yupObject({
      email: string().required().email(),
      password: string().required().min(8),
    })
  ),
})

type T1 = ReturnType<LazyComponentBindsConfig>

function createNFormItemConfig(customAttrs: Record<string, unknown>, inputConfig?: () => T1 | Partial<T1>): LazyComponentBindsConfig {
  return (state) => {
    const _inputConfig = typeof inputConfig === 'function' ? inputConfig() : inputConfig

    return {
      model: 'modelValue',
      props: {
        validationStatus: state.errors[0] ? 'error' : undefined,
        feedback: state.errors[0],
        debounce: 500,
        ...customAttrs,
      },
      ..._inputConfig,
    }
  }
}

function testConfig() {
  return () => {
    if (submitCount.value > 0) {
      return {
        validateOnBlur: true,
        validateOnModelUpdate: true,
      }
    }

    return {
      validateOnBlur: true,
      validateOnModelUpdate: false,
    }
  }
}

const [email, emailAttrs] = defineField('email', createNFormItemConfig({}, testConfig()))
const [password, passwordAttrs] = defineField('password', createNFormItemConfig({}, testConfig()))

const isDisabled = computed(() => Object.values(values).some((v) => !v))

watchEffect(() => {
  // console.log('== controlledValues ==', controlledValues.value, values)
})

const onSubmit = handleSubmit((values) => {
  // Send data to API
  console.log('== onSubmit ==', JSON.stringify(values, null, 2))
})
</script>

<style scoped></style>
