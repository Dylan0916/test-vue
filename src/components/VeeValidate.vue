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
    <button>Sign up for newsletter</button>
    <hr />
    <pre>meta: {{ meta }}</pre>
    <hr />
    <pre>values: {{ values }}</pre>
    <hr />
    <pre>errors: {{ errors }}</pre>
    <hr />
    <div>
      Error:
      <p v-show="meta.touched && errorMsg">{{ errorMsg }}</p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue'
import { useForm, defineRule } from 'vee-validate'
import { object as yupObject, string } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'

const { values, errors, meta, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yupObject({
      email: string(),
      password: string(),
    }).test('at-least-one', '至少需要填寫 A 或 B 其中一個', (value) => {
      const { email, password } = value

      return !!email || !!password
    })
  ),
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const errorMsg = computed(() => Object.values(errors.value)[0])

watchEffect(() => {
  console.log('== errors ==', errors)
})

const onSubmit = handleSubmit((values) => {
  // Send data to API
  console.log('== onSubmit ==', JSON.stringify(values, null, 2))
})
</script>

<style scoped></style>
