import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'animate.css';

import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import emailjs from '@emailjs/browser';
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

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
    path: '/services', 
    name: 'services',
    component: Services, 
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
