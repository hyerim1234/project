import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import DataBindingAttributeView from '@/views/1_databinding/DataBindingAttributeView.vue'
import EventChangeView from '@/views/2_event/EventChangeView.vue'
import RenderingIfView from '@/views/3_extra/RenderingIfView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/databinding',
    name: 'databinding',
    component: DataBindingAttributeView
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: EventChangeView
  },
  {
    path: '/extra/if',
    name: 'RenderingIfView',
    component: RenderingIfView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
