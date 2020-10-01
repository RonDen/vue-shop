import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Cate from '../components/goods/Cate.vue'
import Params from '../components/goods/Params.vue'
import GoodList from '../components/goods/List.vue'
import Add from '../components/goods/Add.vue'
import Right from '../components/power/Right.vue'
import Roles from '../components/power/Roles.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  component: Login
}, {
  path: '/',
  redirect: '/login'
}, {
  path: '/home',
  component: Home,
  redirect: '/welcome',
  children: [{
    path: '/welcome',
    component: Welcome
  }, {
    path: '/users',
    component: Users
  }, {
    path: '/rights',
    component: Right
  }, {
    path: '/roles',
    component: Roles
  }, {
    path: '/categories',
    component: Cate
  }, {
    path: '/params',
    component: Params
  }, {
    path: '/goods',
    component: GoodList
  }, {
    path: '/goods/add',
    component: Add
  }]
}]

const router = new VueRouter({
  routes
})

/**
 * 挂载路由导航守卫
 * to: 将要访问的路径
 * from: 从哪个路径跳转而来
 * next: 一个函数，next() 表示放行，next('/login') 强制跳转
 */
router.beforeEach((to, from, next) => {
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (to.path === '/login') {
    if (!tokenStr) return next()
    else return next(from)
    // return next();
  }
  if (!tokenStr) return next('/login')
  return next()
})

export default router
