'use strict'
require('./app.scss')
import Hero from '../hero/hero'
import Sidebar from '../sidebar/sidebar'
import Song from '../song/song'

export default require('./app.html')({
  components: { Hero, Sidebar, Song }
})
