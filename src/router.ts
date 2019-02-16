import Vue from "vue";
import Router from "vue-router";
import VueHead from "vue-head";

Vue.use(VueHead, {
  separator: " () => ",
  complement: process.env.VUE_APP_TITLE
});

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
      meta: {
        title: "Code. Design. Story. Strategy. - " + process.env.VUE_APP_TITLE
      }
    },
    {
      path: "/stories",
      name: "stories",
      component: () => import("@/views/Stories.vue"),
      meta: {
        title: "Stories from a Charismatic Codefauna"
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
      meta: {
        title: "About a Charismatic Codefauna - " + process.env.VUE_APP_TITLE
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/SignIn.vue"),
      meta: {
        title: "Sign In to " + process.env.VUE_APP_TITLE
      }
    }
  ]
});
