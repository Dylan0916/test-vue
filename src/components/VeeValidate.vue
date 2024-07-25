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
      <label>I agree</label>
      <input v-model="checkbox" v-bind="checkboxAttrs" type="checkbox" value="1" />
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

const { values, errors, meta, defineField, handleSubmit, submitCount, isSubmitting } = useForm({
  validationSchema: toTypedSchema(
    yupObject({
      email: string().required(),
      password: string().required(),
      checkbox: array().min(1),
    })
  ),
  initialValues: {
    checkbox: [],
  },
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [checkbox, checkboxAttrs] = defineField('checkbox')

const isDisabled = computed(() => Object.values(values).some((v) => !v))

watchEffect(() => {
  console.log('== checkbox ==', checkbox.value)
})

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const onSubmit = handleSubmit(async (values) => {
  console.log('== values ==', values)
  // Send data to API
  await testExecutor()
})

async function testExecutor() {
  await sleep(2000)
}
</script>

<style scoped></style>
