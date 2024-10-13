<template>
  <div>
    <input v-model="text" />
    <br />
    <button @click="generateRSAKey">gen RSA key</button>
    <button @click="encryptText">encrypt text</button>
    <button @click="decryptText">decrypt text</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let keyPair = {} as CryptoKeyPair
let encryptedData: ArrayBuffer | null = null

const text = ref('')

async function generateRSAKey() {
  const keyPair = await crypto.subtle.generateKey(
    {
      name: 'RSA-OAEP',
      modulusLength: 2048, // 1024, 2048, 或 4096
      publicExponent: new Uint8Array([1, 0, 1]), // 常用的公鑰指數 (65537)
      hash: { name: 'SHA-256' }, // "SHA-1", "SHA-256", "SHA-384", "SHA-512"
    },
    true,
    ['encrypt', 'decrypt']
  )

  console.log('Generated RSA Key Pair:', keyPair)

  return keyPair
}

async function encryptData(publicKey: CryptoKey, data: BufferSource) {
  const encryptedData = await crypto.subtle.encrypt(
    {
      name: 'RSA-OAEP',
    },
    publicKey,
    data
  )

  console.log('加密後的資料:', new Uint8Array(encryptedData))

  return encryptedData
}

async function decryptData(privateKey: CryptoKey, data: BufferSource) {
  const decryptedData = await crypto.subtle.decrypt(
    {
      name: 'RSA-OAEP',
    },
    privateKey,
    data
  )

  console.log('解密後的資料:', new TextDecoder().decode(decryptedData))

  return decryptedData
}

async function encryptText() {
  const data = new TextEncoder().encode(text.value)

  keyPair = await generateRSAKey()
  encryptedData = await encryptData(keyPair.publicKey, data)
}

async function decryptText() {
  if (!keyPair.privateKey || !encryptedData) {
    return
  }

  await decryptData(keyPair.privateKey, encryptedData)
}
</script>
