import Vue from 'vue'
import App from './App'
import api from './api/index.js'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$api=api;
App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
