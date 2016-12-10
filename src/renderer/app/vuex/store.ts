import * as Vue from 'vue'
import * as Vuex from 'vuex'
Vue.use(Vuex)

import State from './state'
import * as types from './types'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({
  state: new State(),
  getters,
  mutations,
  actions
})
