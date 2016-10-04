import {
  ADD_ALBUMS,
  OPEN_EDITOR, CLOSE_EDITOR,
  SHOW_ALBUM,
  NEW_ALBUM, CREATE_ALBUM,
  EDIT_ALBUM, UPDATE_ALBUM,
  DESTROY_ALBUM,
  CHANGE_ALBUM, CHECK_ALBUM,
  NEW_SONG, CREATE_SONG,
  EDIT_SONG, UPDATE_SONG,
  CHANGE_SONG, CHECK_SONG
} from './mutation-types'

import { Song } from './store'

const ALBUM = 'album'
const SONG = 'song'

export function initialize ({ commit }) {
  new Promise(resolve => {
    setTimeout(() => {
      const year = 2015
      const months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
      resolve(months.map(month => ({ year, month, onLoan: false })))
    }, 100)
  }).then((albums) => {
    commit(ADD_ALBUMS, albums)
  })
}

export function openEditor ({ commit }, target) {
  commit(OPEN_EDITOR, target)
}

export function closeEditor ({ commit }, target) {
  commit(CLOSE_EDITOR, target)
}

export function showAlbum ({ commit, state }) {
  const { year, month } = state.route.params
  new Promise(resolve => {
    setTimeout(() => {
      const songs = []
      for (let i = 0; i < month; i += 1) {
        songs.push({ year, month, page: (i + 1) * 10 })
      }
      resolve(songs)
    }, 500)
  }).then(songs => {
    commit(SHOW_ALBUM, songs)
  })
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

export function newSong ({ commit }, album = {}) {
  const date = new Date()
  const { year = date.getMonth(), month = date.getMonth() } = album
  commit(NEW_SONG, new Song(year, month))
  commit(CHECK_SONG)
  commit(OPEN_EDITOR, SONG)
}

export function createSong ({ commit }) {
  commit(CREATE_SONG)
  commit(CLOSE_EDITOR, SONG)
}

export function editSong ({ commit }, song) {
  commit(EDIT_SONG, song)
  commit(OPEN_EDITOR, SONG)
}

export function updateSong ({ commit }) {
  commit(UPDATE_SONG)
  commit(CLOSE_EDITOR, SONG)
}

export function changeSong ({ commit }, data) {
  commit(CHANGE_SONG, data)
  commit(CHECK_ALBUM)
}
