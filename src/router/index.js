import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '@/views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue');
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
