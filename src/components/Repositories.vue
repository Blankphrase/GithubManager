<template>
<div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
      <router-link v-bind:to="'/repositories/'+ this.username"><a href="" class="btn btn-primary" >Respositories</a></router-link>

    <div id="respositories">
  <h2>My Respositories</h2>

  <ul >
  <li v-for="repository in repositories" :key="repository.id">
   <span class="name"><b>Repo Full Name: </b><router-link v-bind:to="'/details/'+ repository.name">{{repository.full_name}} </router-link></span><br>
   <span class="date"><b>Repo Name: </b>{{repository.name}}</span>
   <span class="commit"><b>Time Created: </b>{{repository.created_at}}</span>
   <router-link v-bind:to="'/branches/'+ repository.name">View Branches</router-link> | <router-link v-bind:to="'/edit/'+ repository.name"> Edit </router-link>
   <span class="commit"><router-link v-bind:to="'/commits/'+ repository.name"><a class="btn btn-primary" style="color:white;" >View Commits</a></router-link></span>
   
</li>
<br>
<a href="/create" class="btn btn-primary" >Create new repository</a>
  </ul>
    <router-view/>
    </div>
  </div>
</template>
<script>
export default{
   
 mounted () {
    this.$store.dispatch('getRepositories')
  },
   data(){
        return{
            username: ''
        }
    },
    computed: {
        
    repositories(){
    return this.$store.state.repositories;
    }
},
created(){
    let username=this.$route.params.username;
    localStorage.setItem('username',username);
    this.username = localStorage.getItem('username');
}
}
</script>

<style lang="scss">

    @import '~bootstrap/scss/bootstrap.scss';
</style>

