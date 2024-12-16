<template>
  <div>
    <button @click="start">Start</button>
    <!-- <button @click="stop">Stop</button> -->
  </div>
</template>

<script lang="ts" setup>
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()

recognition.lang = 'zh-TW'

// recognition.continuous = true
// recognition.interimResults = true

recognition.onresult = event => {
  const { transcript } = event.results[0][0]

  console.log('結果:', transcript)
}

// recognition.onresult = (event) => {
//   let finalTranscript = ''
//   let interimTranscript = ''

//   for (let i = event.resultIndex; i < event.results.length; i++) {
//     const result = event.results[i]
//     const { isFinal } = result
//     const [{ transcript }] = result

//     if (isFinal) {
//       finalTranscript = transcript
//     } else {
//       interimTranscript = transcript
//     }
//   }

//   console.log('即時結果:', interimTranscript)
//   console.log('%c最終結果:', 'color:#EE66A6;', finalTranscript)
// }

// recognition.onspeechstart = () => {
//   console.log('偵測到語音')
// }

// recognition.onspeechend = () => {
//   console.log('語音結束')
// }

// recognition.onend = () => {
//   console.log('語音識別結束')
// }

// recognition.onerror = (event) => {
//   console.error('識別失敗:', event.error)
// }

// recognition.onnomatch = () => {
//   console.log('無法匹配到語音')
// }

function start() {
  recognition.start()
}

// function stop() {
//   recognition.stop()
// }
</script>
