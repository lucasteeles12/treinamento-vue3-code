import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast, { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import 'animate.css'
import '../src/assets/css/fonts.css'

const app = createApp(App)
app.use(router)
app.use(Toast, {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
})
app.mount('#app')
