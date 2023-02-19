import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Main from '../views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'home',
      component: Login
    },    
    {
      path: '/',
      name: 'Inicio',
      component: Main,
    }
  ]
})

export default router
