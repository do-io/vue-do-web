import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch as farSearch,
  faInfoCircle as farInfoCircle,
  faHome as farHome,
  faSwatchbook as farSwatchbook,
  faPencilRuler as farPencilRuler,
  faTint as farTint,
  faCode as farCode,
  faBookUser as farBookUser,
  faBookSpells as farBookSpells
} from "@fortawesome/pro-regular-svg-icons";
import {
  faSearch as fasSearch,
  faInfoCircle as fasInfoCircle,
  faHome as fasHome,
  faSwatchbook as fasSwatchbook,
  faPencilRuler as fasPencilRuler,
  faTint as fasTint,
  faCode as fasCode,
  faBookUser as fasBookUser,
  faBookSpells as fasBookSpells
} from "@fortawesome/pro-solid-svg-icons";
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
import Vuetify from "vuetify";

import VueFire from "vuefire";
import firebase from "firebase/app";
import "firebase/firestore";

library.add(
  faLinkedin,
  faTwitter,
  faGoogle,
  faGithub,
  faCodepen,
  faDribbble,
  faBehance,

  farSearch,
  farInfoCircle,
  farHome,
  farSwatchbook,
  farPencilRuler,
  farTint,
  farCode,
  farBookUser,
  farBookSpells,

  fasSearch,
  fasInfoCircle,
  fasHome,
  fasSwatchbook,
  fasPencilRuler,
  fasTint,
  fasCode,
  fasBookUser,
  fasBookSpells
);

webfont.load({
  typekit: {
    id: "qpx4wdb"
  }
});

Vue.component("font-awesome-icon", FontAwesomeIcon);

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

Vue.use(Vuetify, {
  theme: {
    primary: "#101656",
    secondary: "#1de9b6",
    accent: "#ffd24c",
    error: "#ff1744",
    info: "#2cccf3",
    success: "#1de9b6",
    warning: "#f57c00"
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
