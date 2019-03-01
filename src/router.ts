import Vue from "vue";
import Router from "vue-router";

const home = () => import("@/views/Home.vue");
const about = () => import("@/views/About.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/about",
      name: "about",
      component: about
    }
  ]
});
