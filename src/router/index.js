import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Frontend from '@/components/Frontend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/frontend-news',
      name: 'Frontend',
      component: Frontend
    }
  ]
})
