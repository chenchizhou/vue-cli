import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//按需导入mint-ui
import { Header,Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import axios from 'axios'
Vue.prototype.axios=axios

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
