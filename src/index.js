require('bulma/css/bulma.css')
// require('animate.css')
import AppComponent from './app/app'
import Vue from 'vue'

const App = Vue.extend(AppComponent)

const app = new App()
app.$mount('#app')
