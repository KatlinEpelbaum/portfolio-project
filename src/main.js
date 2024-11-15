import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Contact from './components/Contact.vue';
import Home from './components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
