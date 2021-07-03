<template>
  <div>
    <slot v-bind:message="message"></slot>
    <img src="/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
    <img src="/static/jeremy-bishop-dvACrXUExLs-unsplash.jpg">
  </div>
</template>

<script>
'use strict'

export default {
  data () {
    return {
      message: 'Hello from basic slot',
    }
  }
}
</script>
