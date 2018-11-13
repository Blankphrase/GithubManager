import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(axios)

export default new Vuex.Store({

    
    state: {
        accessToken: '',
        branches: [],
        username: '',
        commits: [],
        profiles: [],
        repositories: [],
        repositoriesdetails: [],
        
    },

    payload: {
        key1: 'accessToken',
        key2: 'branches',
        key3: 'username',
        key4: 'commits',
        key5: 'profiles',
        key6: 'repositories',
        key7: 'repositoriesdetails', 
    },
    
    mutations: {

        setAccesstoken(state, payload) {
            state.accessToken = payload.key1
        },

        setBranch(state, payload) {
            state.branches = payload.key2
        },

        setUsername(state, payload) {
            state.username = payload.key3
        },

        setCommit(state, payload) {
            state.commits = payload.key4
        },

        setProfile(state, payload) {
            state.profiles = payload.key5
        },

        setRepository(state, payload) {
            state.repositories = payload.key6
        },
        
        setRepositoryDetails(state, payload) {
            state.repositoriesdetails = payload.key7
        },
        
    },
    actions: {
        
        getBranches({ commit }) {
            axios
                .get('https://api.github.com/repos/' + localStorage.getItem('username') + '/' + localStorage.getItem('repository') + '/' + 'branches')
                .then(r => r.data)
                .then(branches => {
                    commit('setBranch', branches)
                })
        },
            
        getCommits({ commit }) {
            axios
                .get('https://api.github.com/repos/' + localStorage.getItem('username') + '/' + localStorage.getItem('repository') + '/' + 'commits')
                .then(r => r.data)
                .then(commits => {
                    commit('setCommit', commits)
                })
        },

        getProfiles({ commit }) {
            axios
                .get('https://api.github.com/user?' + localStorage.getItem('accessToken'))
                .then(r => r.data)
                .then(profiles =>  {
                    commit('setProfile', profiles)
                })
        },

        getRepositories({ commit }) {
            axios
                .get('https://api.github.com/users/' + localStorage.getItem('username') + 'repos')
                .then(r => r.data)
                .then(repositories => {
                    commit('setRepository', repositories)
                })
        },


        getRepositoryDetails({ commit }) {
            axios
                .get('https://api.github.com/repos/' + localStorage.getItem('username') + '/' + localStorage.getItem('repository'))
                .then(r => r.data)
                .then(repositoriesdetails => {
                    commit('setRepositoryDetails', repositoriesdetails)
                })
        },

    },
});