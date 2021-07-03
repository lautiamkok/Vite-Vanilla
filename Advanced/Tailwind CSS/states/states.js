'use strict'

import 'tailwindcss/tailwind.css'
import '~/style.css'

import { createApp } from 'vue'
import store from '@/store'

const App = {
  data () {
    return {
      store: this.$store
      // store
    }
  },

  computed: {
    books () {
      return this.$store.state.books
    },

    fictions () {
      return this.books.filter(book => book.type === 'fiction')
    },

    totalBooks () {
      return this.books.length
    },

    totalFictions () {
      return this.fictions.length
    }
  },
}
createApp(App)
  .use(store)
  .mount('#app')
