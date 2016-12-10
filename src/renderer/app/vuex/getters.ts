import { GetterTree } from 'vuex'
import * as _ from 'lodash'
import State from './state'

export default {
    albums({ albums }) {
        return _.orderBy(albums, ['id'], ['desc'])
    },
    albumEditor({ editors }) {
      return editors.album
    }
} as GetterTree<State, {}>
