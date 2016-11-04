import { MutationTree } from 'vuex'
import { Types } from '../types'
import State from './state'

export default {
  [Types[Types.INDEX_SONG]](state, songs) {
    state.songs = songs
  }
} as MutationTree<State>
