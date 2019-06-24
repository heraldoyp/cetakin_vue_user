import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import welcomePage from './views/WelcomePage.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcomePage',
      component: welcomePage
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/mainpage',
      name: 'mainPage',
      component: () => import('./views/MainPage')
    },
    {
      path: '/orderpage',
      name: 'orderPage',
      component: () => import('./views/OrderPage.vue')
    },
    {
      path: '/historydetail',
      name: 'historyDetail',
      component: () => import('./views/HistoryDetail.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import ('./views/Feedback.vue')
    }
  ]
})
