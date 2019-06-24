import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Portfolio from './views/Portfolio.vue';
import PortfolioProject from './views/PortfolioProject.vue';
import PortfolioOrangeBlossom from './views/PortfolioOrangeBlossom.vue';

import { games, apps } from "./assets/portfolio-slider-content.json";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', 
    component: Portfolio,
    children: [
      {
        path: 'orange-blossom',
        component: PortfolioOrangeBlossom
      },
      {
        path: ':project', 
        component: PortfolioProject, 
        props: true,
        beforeEnter: (to, from, next) => {
          let gameId = games.find(game => game.id === to.params.project);
          let appId = apps.find(app => app.id === to.params.project);

          if (gameId || appId ) {
            next()
          } else {
            next("/portfolio")
          } 
        }
      }
    ]
  }
];

export default new VueRouter({
  mode: 'history',
  routes // eigentlich routes: routes,
});
