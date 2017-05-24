import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Post from '@/components/Post'
import Personal from '@/components/Personal'
import Login from '@/components/Login'
import signUp from '@/components/signup'

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
      component: Post
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    }
  ]
})
