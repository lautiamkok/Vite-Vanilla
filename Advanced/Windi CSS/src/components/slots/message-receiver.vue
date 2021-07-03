<template>
  <div>
    <slot v-bind:message="message"></slot>
  </div>
</template>

<script>
'use strict'

// Create a event bus for passing data between components, instead of using
// Vuex. Use mitt instead for Vue.js 3.
// https://v3.vuejs.org/guide/migration/events-api.html#migration-strategy
// const Emitter = mitt ()
import Emitter from '@/plugins/emitter.js'

export default {
  data () {
    return {
      message: '',
    }
  },

  mounted () {
    Emitter.on('send-message', (data) => {
      this.message = data
    })
  }
}
</script>
