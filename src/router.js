import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';


Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*', 
      component: NotFoundComponent, 
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    }, 
    {
      path: '/dash',
      name: 'dash',
      component: () => import(/* webpackChunkName: "about" */ './components/Dashboard.vue'),
    }, 
    {
      path: '/contents/:repo',
      name: 'content',
      component: () => import(/* webpackChunkName: "about" */ './components/RepositoryDetails.vue'),
    }, 
    {
      path: '/commits/:repo',
      name: 'commits',
      component: () => import(/* webpackChunkName: "about" */ './components/Commits.vue'),
    }, 
    {
      path: '/editrepo/:repo',
      name: 'edits',
      component: () => import(/* webpackChunkName: "about" */ './components/EditRepository.vue'),
    },
    {
      path: '/createbranch/',
      name: 'createbranch',
      component: () => import(/* webpackChunkName: "about" */ './components/CreateBranch.vue'),
    },
   
    {
      path: '/profile',
      name: 'profile2',
      component: () => import(/* webpackChunkName: "about" */ './components/Profile.vue')
    
    },
    {
      path: '/respositories/:username',
      name: 'respositories',  
      component: () => import(/* webpackChunkName: "about" */ './components/Repositories.vue')
     
    },
    {
      path: '/respositories',
      name: 'respos',  
      component: () => import(/* webpackChunkName: "about" */ './components/Repositories.vue')
     
    },
    {
      path: '/branches/:repo',
      name: 'branches',  
      component: () => import(/* webpackChunkName: "about" */ './components/Branches.vue')
     
    },

    {
      path: '/createrepo',
      name: 'createrepo',
      component: () => import(/* webpackChunkName: "about" */ './components/CreateRepository.vue'),
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter(to, from, next) {
        window.location = 'https://github.com/login/oauth/authorize?client_id=' + '5529f03c82440fcac6f4'
    }
    },
    


  ],
});
