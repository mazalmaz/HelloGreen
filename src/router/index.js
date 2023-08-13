import { createWebHistory, createRouter } from "vue-router";
import VFrontpage from '../components/page/v-frontpage.vue';
import VRestaurants from '../components/page/v-restaurants.vue'
import VPromo from '../components/page/v-promo.vue'
import VAbout from '../components/page/v-about.vue'

const routes = [
  {
    path: "/",
    name: "Меню",
    component: VFrontpage,
    alias: '/'
  },
  {
    path: "/action",
    name: "Акции",
    component: VPromo,
    alias: '/action'
  },
  {
    path: "/restaurants",
    name: "Рестораны",
    component: VRestaurants,
    alias: '/restaurants'
  },
  {
    path: "/about",
    name: "О Hello Geen",
    component: VAbout,
    alias: '/about'
  }
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;