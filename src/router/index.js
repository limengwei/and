import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Main from '../views/Main'
import Personal from '../views/Personal'
import Service from '../views/Service'
import About from '../views/About'
import Publish from '../views/Publish'
import Login from '../views/Login'
import RouteList from '../views/RouteList'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },{
        path: 'home',
        name: 'home',
        component: Home
      }, {
        path: 'personal',
        name: 'personal',
        component: Personal
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/service',
    name: 'service',
    component: Service,
  },{
    path: '/publish',
    name: 'publish',
    component: Publish,
  },{
    path: '/login',
    name: 'login',
    component: Login,
  },{
    path: '/routelist',
    name: 'routelist',
    component: RouteList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
