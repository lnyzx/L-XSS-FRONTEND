import Vue from 'vue'
import Router from 'vue-router'
import Tools from '@/components/Tools'
import Probe from '@/components/Probe'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/probe',
      name: 'Probe',
      component: Probe
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
