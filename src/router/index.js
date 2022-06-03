import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MusicList from '../views/MusicList.vue'
import SearchView from '../views/SearchView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/musicList',
    name: 'MusicList',
    component: MusicList
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
