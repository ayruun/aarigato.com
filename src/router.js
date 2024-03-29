import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Portfolio from './views/Portfolio.vue';
import PortfolioProject from './views/PortfolioProject.vue';
import PortfolioOrangeBlossom from './views/PortfolioOrangeBlossom.vue';
import PortfolioCircleOfKings from './views/PortfolioCircleOfKings.vue';
import Renderings from './views/Renderings.vue';
import PortfolioCaesarCipher from './views/PortfolioCaesarCipher.vue';
import PortfolioStadtLandFluss from './views/PortfolioStadtLandFluss.vue';
import Impressum from './views/Impressum.vue';

import { games, apps } from "./assets/portfolio-slider-content.json";

Vue.use(VueRouter);

const routes = [
  { path: '/', name: "HomeRoute", component: Home },
  { path: '/impressum', component: Impressum },
  { path: '/portfolio', 
    component: Portfolio,
    children: [
      {
        path: '/orange-blossom',
        component: PortfolioOrangeBlossom
      },
      {
        path: '/circle-of-kings',
        component: PortfolioCircleOfKings
      },
      {
        path: '/caesar-cipher',
        component: PortfolioCaesarCipher
      },
      {
        path: '/stadt-land-fluss',
        component: PortfolioStadtLandFluss
      },
      {
        path: '/renderings',
        component: Renderings
      },
      {
        path: '/:project', 
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    }
    if (to.hash) {
        return { selector: to.hash };
    }
    return { x: 0, y: 0 };
}
});
