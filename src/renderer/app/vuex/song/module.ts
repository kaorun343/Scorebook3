import { Module } from 'vuex'
import State from './state'
import mutations from './mutations'

export default class SongModule implements Module<State, {}> {
  public mutations = mutations

  constructor(public state = new State()) { }
}
