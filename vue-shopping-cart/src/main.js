// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// For every new route scroll to the top of the page
// router.beforeEach(function () {
//   window.scrollTo(0,0)
// });


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
