require('bulma/css/bulma.css')
// require('animate.css')
// require('font-awesome/css/font-awesome.min.css')
import SidebarComponent from './sidebar/sidebar'
import Vue from 'vue'

const Sidebar = Vue.extend(SidebarComponent)

const app = new Sidebar({el: '#app'})
