<template>
  <div>
    <h1>Locks API</h1>
    <button @click="onClick">Click</button>
  </div>
</template>

<script lang="ts" setup>
const lockName = 'my-resource-lock'

function fetchData() {
  return new Promise(resolve => setTimeout(resolve, 3000))
}

function onClick() {
  navigator.locks.request(lockName, async lock => {
    console.log(`獲得鎖: ${lock?.name}, 模式: ${lock?.mode}`)

    await fetchData()

    console.log(`釋放鎖: ${lock?.name}`)
  })

  navigator.locks.request(lockName, async lock => {
    console.log(`獲得鎖: ${lock?.name}, 模式: ${lock?.mode}（第二次）`)

    await fetchData()

    console.log(`釋放鎖: ${lock?.name}（第二次）`)
  })
}
</script>
