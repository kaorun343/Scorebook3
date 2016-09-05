import { mapActions, mapGetters } from 'vuex'
import Column from '../grid/column'
import Columns from '../grid/columns'
import Modal from '../components/modal'

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
  computed: Object.assign({}, {
    album () {
      return this.albumEditor.data
    },
    isEditing () {
      return this.albumEditor.state === 'edit'
    }
  }, mapGetters(['albumEditor'])),
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
      if (target === 'home') {
        value = value === 'true'
      } else {
        value = Number(value)
      }
      this.changeAlbum({ target, value })
    },
    submit () {
      if (this.albumEditor.state === 'new') {
        this.createAlbum()
      } else {
        this.updateAlbum()
      }
    },
    cancel () {
      this.closeEditor('album')
    }
  }, mapActions(['closeEditor', 'createAlbum', 'changeAlbum', 'updateAlbum']))
})
