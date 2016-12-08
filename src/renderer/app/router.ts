import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import Album from './album/album'

Vue.use(VueRouter)

const Home = {
  name: 'Home',
  render (h) {
    return h('div', {}, 'Home')
  }
} as Vue.ComponentOptions<Vue>

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/:year/:month', component: Album },
    { path: '/', component: Home }
  ]
})

export default router
