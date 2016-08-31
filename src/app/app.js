'use strict'
require('./app.css')
import Hero from '../hero/hero'
import Sidebar from '../sidebar/sidebar'

export default require('./app.html')({
  components: { Hero, Sidebar }
})
