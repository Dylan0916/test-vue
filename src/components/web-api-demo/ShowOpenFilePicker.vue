<template>
  <div>
    <input type="file" accept="image/*" @change="onUploadFile" />
    <button @click="openFilePicker">openFilePicker</button>
  </div>
</template>

<script lang="ts" setup>
function onUploadFile(event: Event) {
  console.log((event?.target as HTMLInputElement).files?.[0])
}

async function openFilePicker() {
  const fileHandleList = await window.showOpenFilePicker({
    types: [
      {
        description: 'Images',
        accept: {
          'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.webp'],
        },
      },
    ],
    multiple: true,
  })
  const fileData = await fileHandleList[0].getFile()

  console.log(fileHandleList)
  console.log(fileData)
}
</script>
