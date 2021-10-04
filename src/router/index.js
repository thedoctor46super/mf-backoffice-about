//import { createRouter, createWebHistory } from 'vue-router';
import About from '/src/components/About.vue';
const routes = [
  {
    path: '/mf-backoffice-root/about',
    name: 'About',
    component: About,
  },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
export default router;
