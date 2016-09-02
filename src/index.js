require('bulma/css/bulma.css')
// require('animate.css')
import Vue from 'vue'
import AppComponent from './app/app'
import store from './vuex/store'

const App = Vue.extend(AppComponent)

const app = new App({ store })
app.$mount('#app')
