import {
  OPEN_EDITOR, CLOSE_EDITOR,
  NEW_ALBUM, CREATE_ALBUM, CHANGE_ALBUM, CHECK_ALBUM
} from './mutation-types'

export function openEditor ({ commit }, target) {
  commit(OPEN_EDITOR, target)
}

export function closeEditor ({ commit }, target) {
  commit(CLOSE_EDITOR, target)
}

export function newAlbum ({ commit }, year) {
  commit(NEW_ALBUM, year)
  commit(CHECK_ALBUM)
  commit(OPEN_EDITOR, 'album')
}

export function createAlbum ({ commit }) {
  commit(CREATE_ALBUM)
  commit(CLOSE_EDITOR, 'album')
}

export function changeAlbum ({ commit }, data) {
  commit(CHANGE_ALBUM, data)
  commit(CHECK_ALBUM)
}
