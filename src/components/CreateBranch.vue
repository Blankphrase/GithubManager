<template>
  <div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
      <router-link v-bind:to="'/repositories/'+ this.username"><a href="" class="btn btn-primary" >Respositories</a></router-link>


    <div id="nav">
     
      <form>
      {{status}}
  <div class="form-group">
  <span style="color:green;">{{message}}</span><br>
    <label for="exampleInputEmail1">Name</label>
    <input v-model="name"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name">

  </div>
 
</form>
    {{status}}
<a class="btn btn-primary" v-on:click="submitData()" >Create Repo</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
export default{

data(){
  return{
    message:'',
    username: '',
    name:'',
    status:''
  }
},
created(){
      this.username = localStorage.getItem('username');
  },
 methods: {
 submitData() {
       axios
        .post('https://api.github.com/repos'+ localStorage.getItem('username')+'/'+ 'gits/'+'refs', {
           ref: "ref/heads/"+ name,
           sha: localStorage.getItem('sha')
        })
       .then(function(){
          this.status="branch created successfully"
        });
    }
    
    }
  }
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
</style>
