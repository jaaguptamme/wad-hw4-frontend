import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'
import ContactsView from '../views/ContactsView.vue'
import PostView from '../views/PostView.vue'
import AddPostView from '../views/AddPostView.vue'
import auth from '../auth'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
    }
  },{
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component:ContactsView,
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
    }
  },
  {
    path: '/addpost',
    name: 'addpost',
    component:AddPostView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
