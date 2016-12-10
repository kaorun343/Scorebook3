import * as Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'
import * as _ from 'lodash'
import Column from '../../shared/bulma/column'
import Columns from '../../shared/bulma/columns'
import Modal from '../../shared/bulma/modal'
import Selectbox, { Option } from './selectbox'
import State from '../vuex/state'
import Editor, { EditorState } from '../data/Editor'
import Album, { Place, placeToString } from '../data/Album'
import * as template from './album.html'

function* range(from: number, to: number) {
  if (from < to) {
    while (from <= to) {
      yield from++
    }
  } else {
    while (from >= to) {
      yield from--
    }
  }
}

@Component(template<AlbumEditor>({
  methods: mapActions(['storeAlbum', 'updateAlbum', 'cancelAlbum']),
  computed: mapGetters({editor: 'albumEditor', albums: 'albums'}),
  components: {
    Column, Columns, Modal, Selectbox
  }
}))
export default class AlbumEditor extends Vue {

  storeAlbum: (album: Album) => Promise<void>
  updateAlbum: (album: Album) => Promise<void>
  cancelAlbum: () => Promise<void>

  album = Album.latest()
  editor: Editor
  albums: Album[]

  years = [...range(new Date().getFullYear(), 1971)].map(value => new Option(`${value}年`, value))
  months = [...range(12, 1)].map(value => new Option(`${value}月`, value))
  places = [
    new Option(placeToString(Place.MyHome), Place.MyHome),
    new Option(placeToString(Place.FamilyHome), Place.FamilyHome),
    new Option(placeToString(Place.OnLoan), Place.OnLoan)
  ]

  get isEditing() {
    return this.editor.state === EditorState.EDITING
  }

  get valid() {
    return _.every(this.albums, (album) => {
      return album.id !== (this.album.year * 100 + this.album.month)
    })
  }

  submit() {
    const album = Album.clone(this.album)
    if (this.editor.state === EditorState.CREATING) {
      this.storeAlbum(album)
    } else {
      this.updateAlbum(album)
    }
  }

  cancel() {
    this.cancelAlbum()
  }
}
