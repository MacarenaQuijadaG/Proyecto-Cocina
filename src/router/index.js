import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '@/views/Login.vue';
import Blog from '@/views/Blog.vue';
import Recetas from '@/views/Recetas.vue';
import Ingredientes from '@/views/Ingredientes.vue';
import Acerca from '@/views/Acerca.vue';

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
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog 
  },
  {
    path: '/recipes',
    name: 'recetas',
    component: Recetas 
  },
  {
    path:'/ingredients',
    name:'ingredientes',
    component: Ingredientes
  },
  {
    path:'/acerca',
    name:'acerca',
    component: Acerca
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
