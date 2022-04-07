import Vue from 'vue' 
import Router from 'vue-router' 
import Home from '@/components/Home' 
import Blog from '@/components/Blog'
import Contact from  '@/components/Contact'
import AboutMe from '@/components/AboutMe'
import Gallery from '@/components/Gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home', 
      name: 'Home', 
      component: Home
    },
    {
      path: '/Blog', 
      name: 'Blog', 
      component: Blog
    },
    {
      path: '/Contact', 
      name: 'Contact', 
      component: Contact
    },
    {
      path: '/AboutMe', 
      name: 'AboutMe', 
      component: AboutMe
    },
    {
      path: '/Gallery', 
      name: 'Gallery', 
      component: Gallery
    }
  ]
})  




