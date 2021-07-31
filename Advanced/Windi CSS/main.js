'use strict'

import 'virtual:windi.css'
import './style.css'
import { createApp } from 'vue'

import CurrentBreakpoint from '@/components/current-breakpoint.vue'

const App = {
  data () {
    return {
      message: 'Hello World'
    }
  },

  components: {
    CurrentBreakpoint
  }
}
createApp(App).mount('#app')
// Or an empty Vue instance
// createApp({}).mount('#app')
