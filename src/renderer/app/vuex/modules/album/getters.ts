import { GetterTree } from 'vuex'
import * as _ from 'lodash'
import State from './state'

export default {
    albums({ albums }) {
        return _.groupBy(albums, (album) => album.year)
    },
    editor({ editor }) {
        return editor
    }
} as GetterTree<State, {}>
