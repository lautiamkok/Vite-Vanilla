'use strict'

// Create global methods.
// Option 1:
// Vue.mixin({
//   methods: {
//     globalHelper () {
//       alert('Hello world')
//     },
//   },
// })

// Option 2:
export default {
  // install(Vue, options) {
  //   Vue.prototype.$globalHelper = () => {
  //     alert('Hello world')
  //   }

  //   // Usage:
  //   // await this.$addScript({...})
  //   Vue.prototype.$addScript = (attributes) => {
  //     const s = document.createElement('script')
  //     for (var attr in attributes) {
  //       s.setAttribute(attr, attributes[attr] ? attributes[attr] : null)
  //     }
  //     document.body.appendChild(s)
  //   }

  //   // Promisise setTimeout.
  //   // Usage:
  //   // await this.$delay(500)
  //   Vue.prototype.$delay = ms => new Promise(res => {
  //     setTimeout(res, ms)
  //   })
  // },
}
