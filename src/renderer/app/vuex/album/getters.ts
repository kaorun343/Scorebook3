import { GetterTree } from 'vuex'
import * as _ from 'lodash'
import State from './state'

export default {
    albums({ albums }) {
        return _.sortBy(albums, ['year', 'month']).reverse()
    },
    editor({ editor }) {
        return editor
    }
} as GetterTree<State, {}>
