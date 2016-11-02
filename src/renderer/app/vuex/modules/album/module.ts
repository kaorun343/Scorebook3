import { Module } from 'vuex'
import State from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default class AlbumModule implements Module<State, {}> {
    public getters = getters
    public mutations = mutations
    public actions = actions

    constructor(public state = new State()) { }
}
