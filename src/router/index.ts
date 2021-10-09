import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Login from '../views/login.vue';
import Register from '../views/Register.vue';
import Posts from '../views/posts/index.vue';
import Dashboard from '../views/dashboard/index.vue';
import DashboardHome from '../views/dashboard/home.vue';
import DashboardTeam from '../views/dashboard/team.vue';
import NProgress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'home',
        name: 'DashboardHome',
        component: DashboardHome,
      },
      {
        path: 'team',
        name: 'DashboardTeam',
        component: DashboardTeam,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  NProgress.start();
  return true;
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
