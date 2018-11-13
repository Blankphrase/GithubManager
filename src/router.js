import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Branches from './components/Branches.vue';
import Commits from './components/Commits.vue';
import CreateBranch from './components/CreateBranch.vue';
import Create from './components/Create.vue';
import Dashboard from './components/Dashboard.vue';
import Edit from './components/Edit.vue';
import Profile from './components/Profile.vue';
import Repositories from './components/Repositories.vue';
import Details from './components/Details.vue';



Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, 

    {
      path: '/login',
      name: 'Login',
      beforeEnter() {
        window.location = 'https://github.com/login/oauth/authorize?client_id=' + '5529f03c82440fcac6f4'
      }
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    }, 

// Repositories components
    {
      path: '/create',
      name: 'Create',
      component: Create,
    },

    {
      path: '/edit/:repository',
      name: 'Edit',
      component: Edit,
    },

    {
      path: '/details/:repository',
      name: 'Details',
      component: Details,
    },

    {
      path: '/repositories/:username',
      name: 'UserRepositories',  
      component: Repositories,
    },

    {
      path: '/commits/:repository',
      name: 'Commits',
      component: Commits,
    },

    {
      path: '/repositories',
      name: 'AllRepositories',  
      component: Repositories,
     
    },

// Branches components
    {
      path: '/branches/:repository',
      name: 'Branches',  
      component: Branches,
     
    },

    {
      path: '/createbranch/',
      name: 'CreateBranch',
      component: CreateBranch,
    },

    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    
    },
    
  ],
});
