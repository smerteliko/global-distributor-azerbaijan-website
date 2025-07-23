/*
 * Global Distributor Azerbaijan Website
 *
 * Developed by Nikolai Makarov (smerteliko@gmail.com)
 * All rights reserved.
 */
import { createRouter, createWebHistory } from 'vue-router';
import home from '@/views/HomeView.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
  },
];

const REPO_NAME = 'global-distributor-azerbaijan-website'; // <--- УКАЖИТЕ ТОЧНОЕ ИМЯ ВАШЕГО РЕПОЗИТОРИЯ
const BASE_URL = process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/';

const router = createRouter({
  history: createWebHistory(BASE_URL),
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

// Добавляем глобальный guard для обработки якорей
router.beforeEach((to, from, next) => {
  if (to.hash) {
    // Если есть хэш, пропускаем навигацию, но убеждаемся, что она произойдет
    next();
  } else {
    // Если хэша нет, и это не переход на '/'
    next();
  }
});

// После навигации, если был якорь, убеждаемся, что scrollBehavior сработал
router.afterEach((to) => {
  if (to.hash) {
    // Ждем, пока DOM обновится, если компонент был изменен
    // Это часто необходимо, если цель якоря находится в компоненте, который только что был загружен.
    setTimeout(() => {
      const targetElement = document.querySelector(to.hash);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: 'smooth',
        });
      }
    }, 100); // Небольшая задержка
  }
});

export default router;
