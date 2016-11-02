import { mapActions, mapState } from 'vuex'
import Column from '../../shared/bulma/column'
import Columns from '../../shared/bulma/columns'
import Modal from '../../shared/bulma/modal'

function * range (from, to) {
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

export default require('./album.html')({
  name: 'AlbumEditor',
  components: { Column, Columns, Modal },
  computed: Object.assign({
    album () {
      return this.editor.data
    },
    isEditing () {
      return this.editor.state === 'edit'
    }
  }, mapState({
    editor: (state) => state.albums.editor
  })),
  data () {
    const year = new Date().getFullYear()
    return {
      years: [...range(year, 1971)].map(value => ({ value })),
      months: [...range(12, 1)].map(value => ({ value }))
    }
  },
  methods: Object.assign({
    change (target, e) {
      let value = e.target.value
      if (target === 'onLoan') {
        value = value === 'true'
      } else {
        value = Number(value)
      }
      this.changeAlbum({ target, value })
    },
    submit () {
      if (this.editor.state === 0) {
        this.storeAlbum()
      } else {
        this.updateAlbum()
      }
    },
    cancel () {
      this.cancelAlbum()
    }
  }, mapActions(['storeAlbum', 'updateAlbum', 'cancelAlbum', 'changeAlbum']))
})
