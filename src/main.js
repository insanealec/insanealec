// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './Routes'

Vue.use(VueRouter);

const router = new VueRouter({
	routes: Routes.routes
});

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  ...App,
  router,
})