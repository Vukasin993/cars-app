import Vue from 'vue'
import VueRouter from 'vue-router'
import Cars from '../components/Cars.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cars',
    name: 'cars',
    component: Cars
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
