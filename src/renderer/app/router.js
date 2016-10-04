import Vue from 'vue'
import VueRouter from 'vue-router'

import Album from './album/album'

Vue.use(VueRouter)

const Home = {
  name: 'Home',
  render (h) {
    return h('div', {}, 'Home')
  }
}

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/:year/:month', component: Album },
    { path: '/', component: Home }
  ]
})

export default router
