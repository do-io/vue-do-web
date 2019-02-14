import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faInfoCircle } from "@fortawesome/pro-light-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faCodepen,
  faDribbble,
  faBehance
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import webfont from "webfontloader";

import VueFire from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

library.add(
  faSearch,
  faInfoCircle,
  faLinkedin,
  faTwitter,
  faGithub,
  faCodepen,
  faDribbble,
  faBehance
);

webfont.load({
  typekit: {
    id: "qpx4wdb"
  }
});

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("bydesign-logo", () => import("@/assets/images/byDesign.svg"));
Vue.component("headerFull", () => import("@/components/layout/HeaderFull.vue"));
Vue.component("footerFull", () => import("@/components/layout/FooterFull.vue"));

var config = {
  apiKey: "AIzaSyCaJO9zCk8O83R7diyr-5wMHyoR6S1jI4o",
  authDomain: "do-io-vue.firebaseapp.com",
  databaseURL: "https://do-io-vue.firebaseio.com",
  projectId: "do-io-vue",
  storageBucket: "",
  messagingSenderId: "851167474788"
};
firebase.initializeApp(config);

export const db = firebase.firestore();

Vue.use(VueFire);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
