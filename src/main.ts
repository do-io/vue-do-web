import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faInfoCircle } from '@fortawesome/pro-light-svg-icons'
import { faLinkedin, faTwitter, faGithub, faCodepen, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faInfoCircle, faLinkedin, faTwitter, faGithub, faCodepen, faDribbble)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
