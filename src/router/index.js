import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/HelloWorld';

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
