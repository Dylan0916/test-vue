import { createApp } from 'vue'

// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// import './style.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
// import 'virtual:windi.css'
import App from './App.vue'
import router from './router'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

const app = createApp(App)

// app.use(vuetify)
app.use(router)
app.mount('#app')
