import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Article from '../views/Article.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    props: true
    
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router