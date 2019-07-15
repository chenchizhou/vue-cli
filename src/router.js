import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import home from './components/home.vue'
import member from './components/member.vue'
import shopcar from './components/shopcar.vue'
import search from './components/search.vue'
export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/shopcar',component:shopcar},
    {path:'/search',component:search}
    
  ]
})
