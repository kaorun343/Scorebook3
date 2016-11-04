import { ActionTree } from 'vuex'
import { Route } from 'vue-router'
import State, { Album } from './state'
import { Types } from '../types'

export default {
  async showAlbum({ commit, rootState }) {

    const promise = new Promise((resolve) => {
      const { year, month } = rootState.route.params
      setTimeout(() => {
        resolve(new Album(Number(year), Number(month)))
      }, 500)
    })

    const album = await promise
    commit(Types[Types.SHOW_ALBUM], album)
    commit(Types[Types.INDEX_SONG], [])
  },
  createAlbum({ commit }, album) {
    commit(Types[Types.CREATE_ALBUM], album)
  },
  storeAlbum({ commit }) {
    commit(Types[Types.STORE_ALBUM])
    commit(Types[Types.CANCEL_ALBUM])
  },
  editAlbum({ commit }, album) {
    commit(Types[Types.EDIT_ALBUM], album)
  },
  updateAlbum({ commit }) {
    commit(Types[Types.UPDATE_ALBUM])
    commit(Types[Types.CANCEL_ALBUM])
  },
  destroyAlbum({ commit }) {
    if (window.confirm('削除しますか?')) {
      commit(Types[Types.DESTROY_ALBUM])
    }
  },
  cancelAlbum({ commit }) {
    commit(Types[Types.CANCEL_ALBUM])
  },
  changeAlbum({ commit }, data) {
    commit(Types[Types.CHANGE_ALBUM], data)
  }
} as ActionTree<State, { route: Route }>
