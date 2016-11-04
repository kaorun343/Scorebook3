import * as Vue from 'vue'
import { MutationTree } from 'vuex'
import { EditorState } from '../editor'
import { Types } from '../types'
import State, { Album } from './state'
import { Bool } from '../bool'

function clone(src: Album) {
  return new Album(src.year, src.month, src.onLoan)
}

export default {
  [Types[Types.SHOW_ALBUM]]({ hero }, album) {
    const { year, month, onLoan } = album as Album
    hero.title = `${year}年${month}月号`
    hero.subtitle = `貸出中：${onLoan === Bool.TRUE ? 'はい' : 'いいえ'}`
  },
  [Types[Types.CREATE_ALBUM]]({ editor }, year) {
    editor.data = new Album(year)
    editor.state = EditorState.CREATING
  },
  [Types[Types.STORE_ALBUM]]({ albums, editor }) {
    const album = editor.data
    Vue.set(albums, album.title, clone(album))
  },
  [Types[Types.EDIT_ALBUM]]({ editor }, album) {
    editor.data = clone(album)
    editor.state = EditorState.EDITING
  },
  [Types[Types.UPDATE_ALBUM]]({ albums, editor }) {
    const album = editor.data
    albums[album.title] = clone(album)
    editor.state = EditorState.WAITING
  },
  [Types[Types.CHANGE_ALBUM]]({ editor }, data) {
    const { target, value } = data as { target: string, value: any }
    (editor.data as { [key: string]: any })[target] = value
  },
  [Types[Types.VALIDATE_ALBUM]]({ albums, editor }) {
    const album = editor.data
    return typeof albums[album.title] === 'undefined'
  },
  [Types[Types.CANCEL_ALBUM]]({ editor }) {
    editor.state = EditorState.WAITING
  }
} as MutationTree<State>
