import Vue from 'vue'
import VueRouter from 'vue-router'
import Cars from '../components/Cars.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import AddCar from '../components/AddCar.vue'
import SingleCar from '../components/SingleCar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cars',
    name: 'cars',
    component: Cars,
    meta: {isAuthRequired: false}
  },
  {
    path: '/add',
    name: 'add-car',
    component: AddCar,
    meta: {isAuthRequired: true}
  },
  {
    path: '/cars/:id',
    name: 'single-car',
    component: SingleCar,
    meta: {isAuthRequired: false}
  },

  {
    path: '/edit-car/:id',
    name: 'edit',
    component: AddCar
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  
  {
    path: '/register',
    name: 'register',
    component: Register
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach(authGuard);
// router.beforeEach(guestGuard);
router.beforeEach(function authGuard(to, from, next) {
  console.log('GLOBAL GUARD', { meta: to.meta.isAuthRequired });
  if (!to.meta.isAuthRequired) {
    console.log('not required');
    next();
  } else if (!localStorage.getItem('token')) {
    console.log('REDIRECTION');
    next('/login');
  } else {
    console.log('pass');
    next();
  }
});
router.beforeEach((to, from, next) => {
  console.log('GLOBAL GUARD 2');
  next();
});

export default router
