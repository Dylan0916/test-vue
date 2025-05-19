<template>
  <ul
    ref="ulRef"
    class="bulleted-editor"
    contenteditable="true"
    @input="onUlInput"
    @keydown="onKeydown"
    @compositionstart="onCompositionStart"
    @compositionend="onCompositionEnd"
  ></ul>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const items = ref<string[]>([''])
const ulRef = ref<HTMLElement | null>(null)
const isComposing = ref(false)

function onUlInput() {
  const ul = ulRef.value
  if (!ul) return
  const newItems: string[] = []
  ul.querySelectorAll('li').forEach(li => {
    newItems.push(li.innerText.replace(/\n/g, ''))
  })
  if (newItems.length === 0) {
    // 補上一個空 li 並聚焦
    const li = document.createElement('li')
    li.innerHTML = ''
    ul.appendChild(li)
    // 將游標聚焦到新 li
    const range = document.createRange()
    range.selectNodeContents(li)
    range.collapse(false)
    const sel = window.getSelection()
    if (sel) {
      sel.removeAllRanges()
      sel.addRange(range)
    }
    newItems.push('')
  }
  items.value = newItems
}

function onKeydown(e: KeyboardEvent) {
  if (isComposing.value) return
  // Backspace: 若只剩一個空 li，阻止刪除
  if (e.key === 'Backspace') {
    const ul = ulRef.value
    if (!ul) return
    const liList = ul.querySelectorAll('li')
    if (liList.length === 1 && liList[0].innerText === '') {
      e.preventDefault()
    }
  }
}

function onCompositionStart() {
  isComposing.value = true
}
function onCompositionEnd() {
  isComposing.value = false
}

onMounted(() => {
  // 初始化時若 ul 沒有 li，補上一個空 li 並聚焦
  const ul = ulRef.value
  if (ul && ul.children.length === 0) {
    const li = document.createElement('li')
    li.innerHTML = ''
    ul.appendChild(li)
  }
})
</script>

<style scoped>
.bulleted-editor {
  list-style-type: disc;
  padding-left: 1.5em;
  min-height: 120px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #fafbfc;
  font-size: 1rem;
  line-height: 1.8;
  font-family: inherit;
}
.bulleted-editor li {
  outline: none;
  min-height: 1.5em;
  white-space: pre-wrap;
}
</style>
