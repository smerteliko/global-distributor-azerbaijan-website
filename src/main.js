import { createApp } from 'vue';
import App from './App.vue';

// Импорт Bootstrap CSS (должен быть до ваших кастомных стилей)
import 'bootstrap/dist/css/bootstrap.min.css';
// Импорт Bootstrap JS (для Navbar, Collapse и т.д.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/style.css';
createApp(App).mount('#app');
