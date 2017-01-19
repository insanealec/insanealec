// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './Routes'
//Allows markup parsing via marked(input, {options}) function.
window.marked = require('marked');

//Create our database access.
window.firebase = require('firebase');
var config = {
  apiKey: "AIzaSyDwcJJMROC2Vvr_LWYD9xR8oJpyzsHHG7M",
  authDomain: "insanealec-265cd.firebaseapp.com",
  databaseURL: "https://insanealec-265cd.firebaseio.com",
  storageBucket: "insanealec-265cd.appspot.com",
  messagingSenderId: "837052494412"
};
firebase.initializeApp(config);

// Get a reference to the database service
window.database = firebase.database();

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


//Stuff for jquery
$(document).on('click','.navbar',function(e) {
    if( $(e.target).is('a') ) {
        $('.navbar-collapse').collapse('hide');
    }
});