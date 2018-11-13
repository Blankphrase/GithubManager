<template>
<div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
    <router-link v-bind:to="'/repositories/'+ this.username"><a href="" class="btn btn-primary" >Respositories</a></router-link>
  

    <div id="respositories">
  <h2>Repository Details</h2>
  <ul > 
  <li >
 
  <span class="name"><b>Name: </b>{{repositoriesdetails.name}}</span><br>
  <span class="name"><b>html_url: </b>{{repositoriesdetails.html_url}}</span><br>
  <span class="name"><b>deployments_url: </b>{{repositoriesdetails.deployments_url}}</span><br>
  <span class="name"><b>Owner login</b>{{repositoriesdetails.owner.login}}</span>
  <span class="name"><b></b>{{repositoriesdetails.subscription_url}}</span>
   
</li>
<br>
{{repository}}

  </ul>
    <router-view/>
    </div>
  </div>
</template>

<script>

export default{
 data () {
     return{
         repository:'',
         username:''
     }
  },
  created(){
      let repository =this.$route.params.repository;
      localStorage.setItem('repository',repository);
      this.username = localStorage.getItem('username');
  },
   mounted () {
    this.$store.dispatch('getRepositoryDetails')
  },
    computed: {
    repositoriesdetails(){
    return this.$store.state.repositoriesdetails;
    }
}
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
</style>

