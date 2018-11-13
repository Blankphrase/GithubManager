import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import store from './store';
import router from './router';
import Qs from 'qs';

Vue.use(Qs);
Vue.config.productionTip = true;
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
