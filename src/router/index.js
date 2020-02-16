import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Main from '../views/Main';
import Personal from '../views/Personal';
import Service from '../views/Service';
import About from '../views/About';
import Publish from '../views/Publish';
import Login from '../views/Login';
import RouteList from '../views/RouteList';
import Ad from '../views/ADPage';
import Xieyi from '../views/Xieyi';
import PersonalCA from '../views/PersonalCA';
import DriverCA from '../views/DriverCA';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: {
      keepAlive: true
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          keepAlive: true
        }
      }, {
        path: 'home',
        name: 'home',
        component: Home,
        meta: {
          keepAlive: true
        }
      }, {
        path: 'personal',
        name: 'personal',
        component: Personal,
        meta: {
          keepAlive: true
        }
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
  }, {
    path: '/publish',
    name: 'publish',
    component: Publish,
    meta: {
      keepAlive: true
    }
  }, {
    path: '/login',
    name: 'login',
    component: Login,
  }, {
    path: '/routelist',
    name: 'routelist',
    component: RouteList,
    meta: {
      keepAlive: true
    }
  }, {
    path: '/ad',
    name: 'ad',
    component: Ad,
  },
  {
    path: '/xieyi',
    name: 'xieyi',
    component: Xieyi,
  }, {
    path: '/pca',
    name: 'pca',
    component: PersonalCA,
  },
  {
    path: '/dca',
    name: 'dca',
    component: DriverCA,
  },

];

const router = new VueRouter({
  routes,
});

export default router;
