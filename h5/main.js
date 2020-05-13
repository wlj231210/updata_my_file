import Vue from 'vue'
import App from './App'
import api from './api/index.js'
import store from './store'
import NavBar from "@/components/1navBar";
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$api=api;
Vue.component("nav-bar", NavBar);
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
