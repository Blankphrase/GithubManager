<template>
  <div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
      <router-link v-bind:to="'/repositories/'+ this.username"><a href="" class="btn btn-primary" >Respositories</a></router-link>


    <div id="nav">

      <form>
  <div class="form-group">
  <span style="color:green;">{{message}}</span><br>
    <label for="exampleInputEmail1">Name</label>
    <input  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" :value= title>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input  type="text" class="form-control" id="exampleInputPassword1" :value= title>
  </div>
   <div class="form-group">
    <label for="exampleFormControlSelect2">Private</label>
    <select multiple class="form-control" id="exampleFormControlSelect2" >
      <option>True</option>
      <option>False</option>
    
    </select>
  </div>
</form>
<a class="btn btn-primary" v-on:click="submitData()" color="white">Submit Edits</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
export default{
 mounted () {
    this.$store.dispatch('getRepositoryDetails')
  },
data(){
  return{
    message:'',
    title:'',
    description:'',
    username: '',
    status:''
  }
},
   computed: {
    repositoriesdetails(){
      return this.$store.state.repositoriesdetails;
    }
},
created(){
      this.username = localStorage.getItem('username');
      this.title=this.$route.params.repository;
  },
 methods: {
 submitData() {
       axios
        .post('https://api.github.com/'+ localStorage.getItem('username') +'/'+ 'repos', {
          name: this.name,
          description: this.description,
          homepage: 'http:localhost:5000',
          private: false,
          has_issues: true,
          has_projects: true,
          has_wiki: true
        })
       .then(function(){
          this.status="changes were successful"
        });
    }
    }
  }
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
</style>

