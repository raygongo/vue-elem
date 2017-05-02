import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Center from '@/page/Center'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/home/list',
          name: 'list',
          component:List,
        },
      ]
    },
    
    {
      path: '/center',
      name: 'center',
      component: Center
    }
  ]
})
