<template>
  <div>
    <h1>Credentials API</h1>
    <p>{{ isLoading ? 'loading...' : '' }}</p>
    <p v-if="isLoggedIn">已登入</p>
    <button v-if="!isLoggedIn" @click="loginAndStoreCredentials('user@example.com', 'user@example.com')">login</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(false)
const isLoggedIn = ref(false)

function login() {
  return new Promise(resolve => setTimeout(resolve, 2000))
}

async function loginAndStoreCredentials(username, password) {
  isLoading.value = true
  await login()

  const credential = new PasswordCredential({
    id: username,
    password: password,
  })

  console.log('== loginAndStoreCredentials credential ==', credential)

  await navigator.credentials.store(credential)
  console.log('憑證已儲存')
  isLoggedIn.value = true
  isLoading.value = false
}

async function autoLogin() {
  isLoading.value = true

  const credential = await navigator.credentials.get({
    // @ts-expect-error
    password: true,
    mediation: 'optional',
  })

  console.log('== autoLogin credential ==', credential)

  if (!credential) {
    console.log('沒有可用憑證')
    isLoading.value = false
    return
  }

  await login()

  console.log('登入成功')
  isLoggedIn.value = true
  isLoading.value = false
}

onMounted(() => {
  autoLogin()
})
</script>
