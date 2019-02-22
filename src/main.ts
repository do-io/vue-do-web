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
  faGoogle,
  faCodepen,
  faDribbble,
  faBehance
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import webfont from "webfontloader";
import VueMq from "vue-mq";

import VueFire from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

library.add(
  faSearch,
  faInfoCircle,
  faLinkedin,
  faTwitter,
  faGoogle,
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

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASEURL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID
});

export const db = firebase.firestore();

Vue.use(VueFire);

Vue.use(VueMq, {
  breakpoints: {
    phone: 700,
    tablet: 1200,
    other: Infinity
  },
  defaultBreakpoint: "phone" // customize this for SSR
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
