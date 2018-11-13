<template>
<div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
    <router-link v-bind:to="'/repositories/'+ this.username"><a href="" class="btn btn-primary" >Respositories</a></router-link>
  

    <div id="respositories">
  <h2>Branches</h2>
  <ul v-for="branch in branches" :key="branch.id">
  <li >
   <span class="name"><b>Name:</b> {{branch.name}}</span><br>
   <span class="name"><b>Commit Sha: </b> {{branch.commit.sha}}</span><br>
   <span class="name"><b>Commit Url:</b> {{branch.commit.url}}</span><br>
  
</li>
  </ul>
  <router-link v-bind:to="'/createbranch/'"><a href="/createbranch" class="btn btn-success" >Create branch</a></router-link >
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
    this.$store.dispatch('getBranches')
  },
    computed: {
    branches(){
    return this.$store.state.branches;
    }
}
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
</style>
