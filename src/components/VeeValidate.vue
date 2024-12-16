<template>
  <form>
    <div>
      <label>Email</label>
      <input v-model="email" v-bind="emailAttrs" type="text" />
    </div>
    <div>
      <label>Password</label>
      <input v-model="password" v-bind="passwordAttrs" type="password" />
    </div>
    <div>
      <label>Phone</label>
      <Phone v-model="phone" v-bind="phoneAttrs" />
    </div>
    <hr />
    <button @click="onSubmit">Sign up for newsletter</button>
    <hr />
    <pre>isSubmitting: {{ isSubmitting }}</pre>
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
import { object as yupObject, string, array } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'

import Phone from './Phone.vue'

const { values, errors, meta, defineField, handleSubmit, submitCount, isSubmitting } = useForm({
  validationSchema: toTypedSchema(
    yupObject({
      email: wordLimitTest(5, '長度超過').required('必填！！'),
      password: string().required(),
      phone: string()
        .trim()
        .test('required phone', '電話驗證失敗', value => {
          return false
        }),
    })
  ),
  initialValues: {
    phone: '+886',
  },
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [phone, phoneAttrs] = defineField<any, string>('phone')

const isDisabled = computed(() => Object.values(values).some(v => !v))

// watchEffect(() => {
//   console.log('== phoneAttrs ==', phoneAttrs.value)
// })

const onSubmit = handleSubmit(values => {
  console.log('== values ==', values)
})

function wordLimitTest(limit: number, errorMessage: string) {
  return string()
    .trim()
    .test('word-limit', errorMessage, value => !value || value.length <= limit)
}
</script>

<style scoped></style>
