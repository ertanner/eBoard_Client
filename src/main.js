// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Hello from './components/HelloWorld'
import About from './components/About'

const routes = [
  { path: '/', component: Hello },
  { path: '/about', component: About}
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
