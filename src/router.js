// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from './components/AboutPage.vue';
import RandomFactsPage from './components/RandomFactsPage.vue';
import ContactPage from './components/ContactPage.vue';
import AppLink from './components/AppLink.vue';

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: AboutPage },
  { path: '/random-facts', component: RandomFactsPage },
  { path: '/contact', component: ContactPage },
  { path: '/app-link', component: AppLink }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

