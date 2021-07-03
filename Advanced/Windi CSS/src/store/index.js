'use strict'

import { createStore } from 'vuex'

import state from './state'
import getters from './getters'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state,
  getters,
  strict: debug
})
