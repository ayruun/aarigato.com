import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Portfolio from './views/Portfolio.vue';
import PortfolioProject from './views/PortfolioProject.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', 
    component: Portfolio,
    children: [
      {
        path: ':project', 
        component: PortfolioProject, 
        props: true
      }
    ]
  }
];

export default new VueRouter({
  mode: 'history',
  routes // eigentlich routes: routes
});
