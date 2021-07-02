'use strict'

import 'tailwindcss/tailwind.css'
import './style.css'

import mitt from 'mitt'

import { createApp } from 'vue'

const App = {
  data() {
    return {
      message: 'Hello World'
    }
  }
}
createApp(App).mount('#app')
// Or an empty Vue instance
// createApp({}).mount('#app')
