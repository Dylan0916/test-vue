<template>
  <div>
    <div>
      <label>Text: </label>
      <input v-model="text" />
    </div>
    <div>
      <label>Voice: </label>
      <select v-model="voiceIndex">
        <option v-for="(voice, index) in voices" :key="`${voice.lang}-${voice.name}`" :value="index">{{ voice.lang }} {{ voice.name }}</option>
      </select>
    </div>
    <div>
      <label>Volume: </label>
      <NSlider v-model:value="volume" :min="0" :max="1" :step="0.1" />
    </div>
    <div>
      <label>Rate: </label>
      <NSlider v-model:value="rate" :min="0.1" :max="10" :step="0.1" />
    </div>
    <div>
      <label>Pitch: </label>
      <NSlider v-model:value="pitch" :min="0" :max="2" :step="0.1" />
    </div>
    <button @click="speak">點擊播放</button>
    <button @click="pause">暫停語音播放</button>
    <button @click="resume">恢復語音播放</button>
    <button @click="cancel">停止語音播放</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NSlider } from 'naive-ui'

const text = ref('哈囉你好，很高興見到你')
const voices = ref<SpeechSynthesisVoice[]>([])
const voiceIndex = ref(0)
const volume = ref(1)
const rate = ref(1)
const pitch = ref(1)

window.speechSynthesis.onvoiceschanged = () => {
  voices.value = window.speechSynthesis.getVoices().toSorted((a, b) => (a.lang > b.lang ? 1 : -1))
  voiceIndex.value = voices.value.findIndex((voice) => voice.lang === 'zh-TW')
}

function speak() {
  const utterance = new SpeechSynthesisUtterance()

  utterance.text = text.value
  utterance.voice = voices.value[voiceIndex.value]
  utterance.volume = volume.value
  utterance.rate = rate.value
  utterance.pitch = pitch.value

  window.speechSynthesis.speak(utterance)

  //   utterance.onstart = function () {
  //     console.log('語音播放開始')
  //   }

  //   utterance.onend = function () {
  //     console.log('語音播放結束')
  //   }

  //   utterance.onerror = function (event) {
  //     console.error('語音播放錯誤:', event.error)
  //   }
}

function pause() {
  window.speechSynthesis.pause()
}

function resume() {
  window.speechSynthesis.resume()
}

function cancel() {
  window.speechSynthesis.cancel()
}
</script>
