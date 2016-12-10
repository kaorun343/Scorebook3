import { MutationTree } from 'vuex'
import State from './state'
import * as types from './types'
import { EditorState, stateToString } from '../data/Editor'

export default {
  [types.CREATE_ALBUM] (state) {
    const editor = state.editors.album
    editor.state = EditorState.CREATING
    editor.title = stateToString(editor.state)
    editor.show = true
  },
  [types.STORE_ALBUM] (state, newAlbum) {
    state.albums.push(newAlbum)
  },
  [types.CANCEL_ALBUM] (state) {
    const editor = state.editors.album
    editor.state = EditorState.WAITING
    editor.show = false
  }
} as MutationTree<State>
