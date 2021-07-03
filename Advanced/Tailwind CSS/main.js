'use strict'

import 'tailwindcss/tailwind.css'
import './style.css'
import { createApp } from 'vue'

const App = {
  data () {
    return {
      message: 'Hello World'
    }
  }
}
createApp(App).mount('#app')
// Or an empty Vue instance
// createApp({}).mount('#app')
