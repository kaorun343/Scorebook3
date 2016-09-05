require('./app.scss')
import { mapActions } from 'vuex'
import Hero from '../hero/hero'
import Sidebar from '../sidebar/sidebar'
import Song from '../song/song'
import AlbumEditor from '../editor/album'
import SongEditor from '../editor/song'

export default require('./app.html')({
  components: { Hero, Sidebar, Song, AlbumEditor, SongEditor },
  data () {
    return {
      modal: {
        album: false,
        song: false
      }
    }
  },
  created () {
    this.initialize()
  },
  methods: Object.assign({}, {
    edit () {
      this.modal.song = !this.modal.song
    }
  }, mapActions(['initialize']))
})
