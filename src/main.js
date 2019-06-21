import Vue from 'vue'
// import VueRouter from 'vue-router';
import App from './App.vue'
// import HomeRoute from './HomeRoute.vue' // nur ein Bsp.
// import PortfolioRoute from './PortfolioRoute.vue';

Vue.config.productionTip = false

// Vue.use(VueRouter);

/*
const routes = [
  { path: '/', component: HomeRoute },
  { path: '/portfolio', component: PortfolioRoute }
];
*/

/*
const router = new VueRouter({
  routes // eigentlich routes: routes
});
*/

// directive by https://stackoverflow.com/a/42389266/11459992
Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
});

new Vue({
  //router,
  render: h => h(App),
}).$mount('#app')


// npm install --save vue-router