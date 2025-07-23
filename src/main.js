/*
 * Global Distributor Azerbaijan Website
 *
 * Developed by Nikolai Makarov (smerteliko@gmail.com)
 * All rights reserved.
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n/i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/fontawesome/css/all.min.css';
import './assets/style.css';

createApp(App).use(router).use(i18n).mount('#app');
