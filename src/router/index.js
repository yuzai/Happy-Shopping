import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Post from '@/components/Post'
import Personal from '@/components/Personal'
import Login from '@/components/Login'
import signUp from '@/components/signup'
import Shop from '@/components/shop'
import texttest from '@/components/Text/Text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/post',
      name: 'post',
      component: texttest
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path:'/test',
      name:'test',
      component:texttest
    }
  ]
})
