'use strict'
require('./app.scss')
import Hero from '../hero/hero'
import Sidebar from '../sidebar/sidebar'
import Song from '../song/song'
import SongEditor from '../editor/song'

export default require('./app.html')({
  components: { Hero, Sidebar, Song, SongEditor },
  data() {
    return {
      show: true
    }
  },
  methods: {
    edit() {
      this.show = !this.show
    }
  }
})
