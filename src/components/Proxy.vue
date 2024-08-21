<template>
  <div>
    <div>
      <h3>Welcome</h3>
      <button @click="refreshWelcome()">refreshWelcome</button>
      <pre>{{ welcomeData }}</pre>
    </div>
    <div>
      <h3>check-login</h3>
      <button @click="refreshCheckLoginData()">refreshCheckLoginData</button>
      <pre>{{ checkLoginData }}</pre>
    </div>
    <div>
      <h3>login</h3>
      <button @click="executeCheckLoginData()">login</button>
      <pre>{{ loginData }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue'
import axios from 'axios'

const welcomeData = ref({})
const checkLoginData = ref({})
const loginData = ref({})

async function refreshWelcome() {
  const { data } = await axios.get('/api/welcome')

  welcomeData.value = data
}
async function refreshCheckLoginData() {
  const { data } = await axios.get('/api/check-login', { withCredentials: true })

  checkLoginData.value = data
}
async function executeCheckLoginData() {
  const { data } = await axios.post('/api/login', { username: 'testname', password: 'testpassword' })

  loginData.value = data
}
</script>

<style scoped></style>
