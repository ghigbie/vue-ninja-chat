import Vue from 'vue';
import Router from 'vue-router';
import VueChatScroll from 'vue-chat-scroll';
import Welcome from '@/components/Welcome';
import Chat from '@/components/Chat';
import NotFound from '@/components/NotFound';

Vue.use(Router);
Vue.use(VueChatScroll);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcom',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true, //this allows props to be passed to the chat route
      beforeEnter: (to, from, next) => {
        if(to.params.name){
          next();
        }else{
          next({ name: 'Welcome'});
        }
      }
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound,
    }
  ]
})
