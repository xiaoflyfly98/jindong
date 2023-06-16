import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home/Home')
  },
  {
    path: '/orderconfirmation/:id',
    name: 'Orderconfirmation',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/orderconfirmation/Orderconfirmation')
  },
  {
    path: '/myinfo',
    name: 'Myinfo',
    component: () => import(/* webpackChunkName: "myInfo" */ '../views/myinfo/myInfo')
  },
  {
    path: '/myadress',
    name: 'Myadress',
    component: () => import(/* webpackChunkName: "Myadress" */ '../views/myinfo/Myadress')
  },
  {
    path: '/creatmyadress',
    name: 'Creatmyadress',
    component: () => import(/* webpackChunkName: "Myadress" */ '../views/myinfo/Creatmyadress')
  },
  {
    path: '/changemyadress',
    name: 'Changemyadress',
    component: () => import(/* webpackChunkName: "myInfo" */ '../views/myinfo/Changemyadress')
  },
  {
    path: '/cartlist',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "CartList" */ '../views/cartlist/CartList')
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "OrderList" */ '../views/orderlist/Orderlist')
  },
  {
    path: '/Shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/shop/Shop')
  },
  {
    path: '/test/',
    name: 'test',
    component: () => import(/* webpackChunkName: "Shop" */ '../views/shop/test')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register/register')
    ,
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin;
      if (isLogin) {
        next({ name: 'Home' });
      } else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login')
    ,
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage
      if (isLogin) {
        next({ name: 'Home' });
      } else {
        next();
      }
    }
  }




  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  if (isLogin || to.name === "Login" || to.name === "Register") {
    next();
  } else {
    next({ name: 'Login' });
  }
});

export default router
