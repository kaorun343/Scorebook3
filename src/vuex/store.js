import Vue from 'vue'
import Vuex from 'vuex'
import {
  ADD_ALBUMS,
  OPEN_EDITOR, CLOSE_EDITOR,
  SHOW_ALBUM,
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

    this.album = {
      title: '',
      subtitle: ''
    }

    this.songs = []
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
  [SHOW_ALBUM] (state, songs) {
    const { year, month } = state.route.params
    state.album.title = `${year}年${month}月号`
    const { home } = state.albums[year].months[month]
    state.album.subtitle = `自宅：${home ? 'はい' : 'いいえ'}`
    state.songs = songs
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
    albums[year].months[month].home = home
  },
  [DESTROY_ALBUM] ({ albums }, { year, month }) {
    Vue.delete(albums[year].months, month)
    if (Object.keys(albums[year]) === 0) {
      Vue.delete(albums, year)
    }
  },
  [CHANGE_ALBUM] ({ editors: { album }}, { target, value }) {
    album.data[target] = value
  },
  [CHECK_ALBUM] ({ editors: { album }, albums }) {
    const { year, month } = album.data
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
