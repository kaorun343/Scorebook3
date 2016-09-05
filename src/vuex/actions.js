import {
  OPEN_EDITOR, CLOSE_EDITOR,
  NEW_ALBUM, CREATE_ALBUM,
  EDIT_ALBUM, UPDATE_ALBUM,
  DESTROY_ALBUM,
  CHANGE_ALBUM, CHECK_ALBUM
} from './mutation-types'

const ALBUM = 'album'

export function openEditor ({ commit }, target) {
  commit(OPEN_EDITOR, target)
}

export function closeEditor ({ commit }, target) {
  commit(CLOSE_EDITOR, target)
}

export function newAlbum ({ commit }, year) {
  commit(NEW_ALBUM, year)
  commit(CHECK_ALBUM)
  commit(OPEN_EDITOR, ALBUM)
}

export function createAlbum ({ commit }) {
  commit(CREATE_ALBUM)
  commit(CLOSE_EDITOR, ALBUM)
}

export function editAlbum ({ commit }, album) {
  commit(EDIT_ALBUM, album)
  commit(OPEN_EDITOR, ALBUM)
}

export function updateAlbum ({ commit }) {
  commit(UPDATE_ALBUM)
  commit(CLOSE_EDITOR, ALBUM)
}

export function destroyAlbum ({ commit }, album) {
  commit(DESTROY_ALBUM, album)
}

export function changeAlbum ({ commit }, data) {
  commit(CHANGE_ALBUM, data)
  commit(CHECK_ALBUM)
}
