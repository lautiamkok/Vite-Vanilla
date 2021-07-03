<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
'use strict'

export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },

  data () {
    return {}
  },

  mounted () {
    console.log('message from the parent =', this.message)
  }
}
</script>
