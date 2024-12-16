<template>
  <div>
    <input v-model="text" />
    <br />
    <button @click="generateAESKey">gen AES key</button>
    <button @click="encryptText">encrypt text</button>
    <button @click="decryptText">decrypt text</button>
    <hr />
    <!-- <CryptographyRSA /> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let aesKey: CryptoKey | null = null
let iv: Uint8Array | null = null
let encryptedData: ArrayBuffer | null = null

const text = ref('')

function generateRandomValues() {
  const array = new Uint8Array(12)
  window.crypto.getRandomValues(array)
  return array
}

async function generateAESKey() {
  const key = await crypto.subtle.generateKey(
    {
      name: 'AES-GCM',
      length: 256, // 128, 192 或 256
    },
    true,
    ['encrypt', 'decrypt']
  )

  console.log('Generated AES Key:', key)

  return key
}

async function encryptData(key: CryptoKey, data: BufferSource) {
  const iv = generateRandomValues()
  const encrypted = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    data
  )

  console.log('iv:', iv)
  console.log('加密後的資料:', new Uint8Array(encrypted))

  return { encrypted, iv }
}

async function decryptData(key: CryptoKey, encryptedData: BufferSource) {
  if (!iv) {
    return
  }

  const decrypted = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    encryptedData
  )

  console.log('解密後的資料:', new TextDecoder().decode(decrypted))

  return decrypted
}

async function encryptText() {
  aesKey = await generateAESKey()

  const data = new TextEncoder().encode(text.value)
  const result = await encryptData(aesKey, data)

  ;[iv, encryptedData] = [result.iv, result.encrypted]
}

async function decryptText() {
  if (!aesKey || !encryptedData) {
    return
  }

  await decryptData(aesKey, encryptedData)
}
</script>
