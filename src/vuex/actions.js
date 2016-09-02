import {
  OPEN_MODAL, CLOSE_MODAL,
  NEW_ALBUM, CREATE_ALBUM, CHANGE_ALBUM, CHECK_ALBUM
} from './mutation-types'

export function openModal ({ commit }, target) {
  commit(OPEN_MODAL, target)
}

export function closeModal ({ commit }, target) {
  commit(CLOSE_MODAL, target)
}

export function newAlbum ({ commit }, year) {
  commit(NEW_ALBUM, year)
  commit(CHECK_ALBUM)
  commit(OPEN_MODAL, 'album')
}

export function createAlbum ({ commit }) {
  commit(CREATE_ALBUM)
  commit(CLOSE_MODAL, 'album')
}

export function changeAlbum ({ commit }, args) {
  commit(CHANGE_ALBUM, args)
  commit(CHECK_ALBUM)
}
