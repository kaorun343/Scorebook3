import Vue from 'vue'
import Vuex from 'vuex'
import {
  ADD_ALBUMS,
  OPEN_EDITOR, CLOSE_EDITOR,
  NEW_ALBUM, CREATE_ALBUM,
  EDIT_ALBUM, UPDATE_ALBUM,
  DESTROY_ALBUM,
  CHANGE_ALBUM, CHECK_ALBUM
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

export class Editor {
  constructor (data) {
    this.title = ''
    this.state = ''
    this.show = false
    this.valid = false
    this.data = data
  }
}

export class Year {
  constructor (year, months = {}) {
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
    this.albums = {}

    this.editors = {
      album: new Editor(new Album()),
      song: new Editor({})
    }
  }
}

const mutations = {
  [ADD_ALBUMS] (state, albums) {
    albums.forEach(({ year, month, home }) => {
      const album = new Month(year, month, home)
      if (typeof state.albums[year] === 'undefined') {
        Vue.set(state.albums, year, new Year(year))
      }
      Vue.set(state.albums[year].months, month, album)
    })
  },
  [OPEN_EDITOR] (state, target) {
    state.editors[target].show = true
  },
  [CLOSE_EDITOR] (state, target) {
    state.editors[target].show = false
    state.editors[target].state = ''
  },
  [NEW_ALBUM] ({ editors: { album }}, year) {
    album.title = '新規アルバム作成'
    album.state = 'new'
    album.data = new Album(year)
  },
  [CREATE_ALBUM] ({ editors: { album }, albums }) {
    const { year, month, home } = album.data
    if (typeof albums[year] === 'undefined') {
      Vue.set(albums, year, new Year(year))
    }
    const months = albums[year]
    Vue.set(months.months, month, new Month(year, month, home))
  },
  [EDIT_ALBUM] ({ editors: { album }}, { year, month, home }) {
    album.title = 'アルバムを編集'
    album.state = 'edit'
    album.data = new Album(year, month, home)
    album.valid = true
  },
  [UPDATE_ALBUM] ({ editors: { album }, albums }) {
    const { year, month, home } = album.data
    const months = albums.find(albums => albums.year === year)
    months.months.find(album => album.month === month).home = home
  },
  [DESTROY_ALBUM] ({ albums }, { year, month }) {
    const months = albums.find(albums => albums.year === year)
    const index = months.months.findIndex(album => album.month === month)
    months.months.splice(index, 1)
  },
  [CHANGE_ALBUM] ({ editors: { album }}, { target, value }) {
    album.data[target] = value
  },
  [CHECK_ALBUM] ({ editors: { album }, albums }) {
    const { year, month } = album
    if (typeof albums[year] !== 'object') {
      album.valid = true
    } else if (typeof albums[year].months[month] !== 'object') {
      album.valid = true
    } else {
      album.valid = false
    }
  }
}

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state: new State()
})

export default store
