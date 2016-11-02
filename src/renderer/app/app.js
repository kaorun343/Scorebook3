require('bulma/css/bulma.css')
require('./app.scss')

import 'ts-helpers'
import Vue from 'vue'

import store from './vuex/store'
import { mapActions } from 'vuex'

import router from './router'

import { sync } from 'vuex-router-sync'
sync(store, router)

import Sidebar from './sidebar/sidebar'
import AlbumEditor from './editor/album'
// import SongEditor from './editor/song'

const app = new Vue(require('./app.html')({
  store,
  router,
  components: { Sidebar, AlbumEditor },
  created () {
    // this.initialize()
  },
  methods: mapActions([])
}))

app.$mount('#app')
