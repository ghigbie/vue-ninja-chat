import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcom',
      component: Welcome
    }
  ]
})
