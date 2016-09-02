import Vue from 'vue'
import Vuex from 'vuex'
import {
  OPEN_MODAL, CLOSE_MODAL,
  NEW_ALBUM, CREATE_ALBUM, CHANGE_ALBUM, CHECK_ALBUM
} from './mutation-types'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const date = new Date()

export class Album {
  constructor (year = date.getFullYear(), month = 12, home = true) {
    this.year = year
    this.month = month
    this.home = home
  }
}

export class Modal {
  constructor () {
    this.title = ''
    this.type = ''
    this.show = false
    this.valid = false
  }
}

export class Year {
  constructor (year, months = []) {
    this.year = year
    this.months = months
  }
}

export class Month extends Album {
  constructor (year, month, home) {
    super(year, month, home)
    this.title = `${year}年${month}月号`
  }
}

export class State {
  constructor () {
    this.album = new Album()

    const years = [2015]
    const months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    this.albums = years.map(year => {
      return new Year(year, months.map((month) => new Month(year, month, true)))
    })

    this.modal = {
      album: new Modal(),
      song: new Modal()
    }
  }
}

const mutations = {
  [OPEN_MODAL] (state, target) {
    state.modal[target].show = true
  },
  [CLOSE_MODAL] (state, target) {
    state.modal[target].show = false
    state.modal[target].type = ''
  },
  [NEW_ALBUM] (state, year) {
    state.modal.album.title = '新規アルバム作成'
    state.modal.album.type = 'new'
    state.album = new Album(year)
  },
  [CREATE_ALBUM] ({ album, albums }) {
    const { year, month, home } = album
    const index = albums.findIndex(albums => albums.year === year)
    if (index > -1) {
      const months = albums[index]
      months.months.push(new Month(year, month))
      months.months = albums[index].months.sort((a, b) => a.value < b.value)
    } else {
      albums.push(new Year(year, [new Month(year, month, home)]))
      albums = albums.sort((a, b) => a.year < b.year)
    }
  },
  [CHANGE_ALBUM] ({ album }, { target, value }) {
    album[target] = value
  },
  [CHECK_ALBUM] ({ album, albums, modal }) {
    const { year, month } = album
    const index = albums.findIndex(albums => albums.year === year)
    if (index > -1) {
      const months = albums[index].months
      if (months.findIndex(m => m.month === month) > -1) {
        modal.album.valid = false
        return
      }
    }
    modal.album.valid = true
  }
}

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state: new State()
})

export default store
