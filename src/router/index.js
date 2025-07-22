import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/HomeView.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      return {
        el: to.hash,
        behavior: 'smooth',
        top: navbarHeight,
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
