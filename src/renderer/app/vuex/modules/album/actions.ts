import { ActionTree } from 'vuex'
import State from './state'
import { Types } from '../../types'

export default {
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
} as ActionTree<State, {}>
