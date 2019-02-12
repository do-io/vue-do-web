import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: 'Code. Design. Story. Strategy. - ' + process.env.VUE_APP_TITLE,
        metaTags: [
          {
            name: 'description',
            content: 'this is a sample description',
          },
          {
            name: 'og:description',
            content: 'this is an og sample description',
          },
        ],
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
      meta: {
        title: 'About a Charismatic Codefauna - ' + process.env.VUE_APP_TITLE,
        metaTags: [
          {
            name: 'description',
            content: 'this is a sample about description',
          },
          {
            name: 'og:description',
            content: 'this is an og sample about description',
          },
        ],
      },
    },
  ],
});
