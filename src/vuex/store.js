import Vue from 'vue'
import Vuex from 'vuex'
import {
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
    const years = [2015]
    const months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    this.albums = years.map(year => {
      return new Year(year, months.map((month) => new Month(year, month, true)))
    })

    this.editors = {
      album: new Editor(new Album()),
      song: new Editor({})
    }
  }
}

const mutations = {
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
    const index = albums.findIndex(albums => albums.year === year)
    if (index > -1) {
      const months = albums[index].months
      if (months.findIndex(m => m.month === month) > -1) {
        album.valid = false
        return
      }
    }
    album.valid = true
  }
}

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state: new State()
})

export default store
