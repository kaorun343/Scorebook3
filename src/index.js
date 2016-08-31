require('bulma/css/bulma.css')
// require('animate.css')
// require('font-awesome/css/font-awesome.min.css')
import AppComponent from './app/app'
import Vue from 'vue'

const App = Vue.extend(AppComponent)

const app = new App({el: '#app'})
