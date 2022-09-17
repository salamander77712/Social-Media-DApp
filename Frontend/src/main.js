//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
var web3js;
//Vue.prototype.$contract;

app.use(router)

app.mount('#app')
