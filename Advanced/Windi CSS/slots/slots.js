'use strict'

import 'virtual:windi.css'
import '~/style.css'

import Emitter from '@/plugins/emitter.js'

import { createApp } from 'vue'

import MessageData from '@/components/slots/message-data.vue'
import MessageProps from '@/components/slots/message-props.vue'
import MessageReceiver from '@/components/slots/message-receiver.vue'

const App = {
  data () {
    return {
      message: 'Hello World'
    }
  },

  components: {
    MessageData,
    MessageProps,
    MessageReceiver
  },

  methods: {
    emitMessage () {
      Emitter.emit('send-message', 'Message emitted from parent.')
    },
  }
}
createApp(App).mount('#app')
// Or an empty Vue instance
// createApp({}).mount('#app')
