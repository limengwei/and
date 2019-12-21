import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vant/lib/index.css';
import {Lazyload} from 'vant'

Vue.config.productionTip = false;
Vue.use(Lazyload)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

