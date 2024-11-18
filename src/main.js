import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'animate.css';

import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';
import Work from './components/Work.vue';

// Define routes
const routes = [
  {
    path: '/', 
    name: 'home',
    component: Home, 
  },
  {
    path: '/contact', 
    name: 'contact',
    component: Contact, 
  },
  {
    path: '/about', 
    name: 'about',
    component: About, 
  },
  {
    path: '/work', 
    name: 'work',
    component: Work, 
  },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount the Vue app with the router
createApp(App)
  .use(router)
  .mount('#app');
