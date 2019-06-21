import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

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
  render: h => h(App),
}).$mount('#app')
