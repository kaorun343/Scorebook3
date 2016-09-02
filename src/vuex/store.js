import Vue from 'vue'
import Vuex from 'vuex'
import { OPEN_MODAL, CLOSE_MODAL } from './mutation-types'

Vue.use(Vuex)

export class Album {
  constructor () {
    const date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
    this.home = true
  }
}

export class State {
  constructor () {
    const years = [2016, 2015, 2014, 2013, 2012, 2011, 2010]
    const months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    this.albums = years.map((year) => ({
      year,
      months: months.map((month) => ({
        title: `${year}年${month}月号`,
        value: `${year}-${month}`
      }))
    }))

    this.modal = {
      album: false,
      song: false
    }
  }
}

const actions = {
  openModal ({ commit }, target) {
    commit(OPEN_MODAL, target)
  },
  closeModal ({ commit }, target) {
    commit(CLOSE_MODAL, target)
  }
}

const getters = {
  albums: state => state.albums,
  modal: state => state.modal
}

const mutations = {
  [OPEN_MODAL] (state, target) {
    state.modal[target] = true
  },
  [CLOSE_MODAL] (state, target) {
    state.modal[target] = false
  }
}

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state: new State()
})

export default store
