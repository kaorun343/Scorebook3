import { ActionTree } from 'vuex'
import State from './state'
import * as types from './types'

export default {
  createAlbum({ commit }) {
    commit(types.CREATE_ALBUM)
  },
  storeAlbum({ commit, dispatch }, newAlbum) {
    commit(types.STORE_ALBUM, newAlbum)
    commit(types.CANCEL_ALBUM)
  },
  editAlbum() { },
  updateAlbum() { },
  destroyAlbum() { },
  cancelAlbum({ commit }) {
    commit(types.CANCEL_ALBUM)
  }
} as ActionTree<State, {}>
