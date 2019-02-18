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
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/stories",
      name: "stories",
      component: () => import("@/views/Stories.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue")
    }
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () => import("@/views/SignIn.vue")
    // },
    // {
    //   path: "/stories/edit",
    //   name: "newStory",
    //   component: () => import("@/views/Story.vue")
    // }
  ]
});
