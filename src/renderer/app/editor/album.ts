import * as Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions, mapState } from 'vuex'
import Columns from '../../shared/bulma/columns'
import Modal from '../../shared/bulma/modal'
import Select, { Option } from './select'
import State, { Album, AlbumState } from '../vuex/modules/album/state'
import Editor, { EditorState } from '../vuex/modules/editor'

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

const years = [...range(new Date().getFullYear(), 1971)].map(value => new Option(`${value}年`, value))
const months = [...range(12, 1)].map(value => new Option(`${value}月`, value))
const booleans = [new Option('いいえ', AlbumState.FALSE), new Option('はい', AlbumState.TRUE)]

@Component<AlbumEditor>({
  computed: mapState<{ albums: State }>({
    editor: (state) => state.albums.editor,
    album: (state) => state.albums.editor.data
  }),
  methods: mapActions(['storeAlbum', 'updateAlbum', 'cancelAlbum', 'changeAlbum']),
  render(h) {
    const Div = 'div'
    const Button = 'button'
    const prefix = 'album'

    const { year, month, onLoan } = this.album
    const disabled = this.isEditing

    return h(Modal, { props: { show: this.editor.show, title: this.editor.title } }, [
      h(Div, { slot: 'body' }, [
        h(Columns, [
          h(Select, {
            props: { value: year, name: 'year', prefix, title: '発売年', disabled },
            on: {
              change: (value: string) => {
                this.change('year', Number(value))
              }
            }
          }, years.map(({text, value}) => h('option', { attrs: { value } }, text))),
          h(Select, {
            props: { value: month, name: 'month', prefix, title: '発売月', disabled },
            on: {
              change: (value: string) => {
                this.change('month', Number(value))
              }
            }
          }, months.map(({text, value}) => h('option', { attrs: { value } }, text))),
          h(Select, {
            props: { value: onLoan, name: 'on-loan', prefix, title: '貸出中', disabled: false },
            on: {
              change: (value: string) => {
                this.change('onLoan', Number(value))
              }
            }
          }, booleans.map(({text, value}) => h('option', { attrs: { value } }, text))),
        ])
      ]),
      h(Div, { slot: 'footer' }, [
        h(Button, {
          staticClass: 'button is-primary',
          on: { click: this.submit },
          attrs: { disabled: !this.editor.valid }
        }, '保存'),
        h(Button, {
          staticClass: 'button',
          on: { click: this.cancel }
        }, 'キャンセル')
      ])
    ])
  }
})
export default class AlbumEditor extends Vue {

  storeAlbum: () => void
  updateAlbum: () => void
  cancelAlbum: () => void
  changeAlbum: (context: { target: string, value: any }) => void

  editor: Editor<Album>
  album: Album

  get isEditing() {
    return this.editor.state === EditorState.EDITING
  }

  change(target: string, value: any) {
    this.changeAlbum({ target, value })
  }

  submit() {
    if (this.editor.state === EditorState.CREATING) {
      this.storeAlbum()
    } else {
      this.updateAlbum()
    }
  }

  cancel() {
    this.cancelAlbum()
  }
}
