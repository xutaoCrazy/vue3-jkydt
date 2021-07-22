import { createRouter, createWebHistory } from 'vue-router'
import a from '../views/a.vue'
import b from '../views/b.vue'
import c from '../views/c.vue'
import d from '../views/d.vue'
import e from '../views/e.vue'
import card from '../views/card.vue'
import home from '../components/home.vue'

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component:home,
      children:[
        {
          path: '/a',
          component: a
        },
        {
          path: '/b',
          component: b
        },
        {
          path: '/c',
          component: c
        },
        {
          path: '/d',
          component: d
        }
      ]
    },
    {
      path: '/e',
      component: e
    },
    {
      path: '/card',
      component: card
    }
  
  ]
})
export default router

