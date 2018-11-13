<template>
  <div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
      <router-link v-bind:to="'/respositories/'+ this.username"><a href="" class="btn btn-primary" >Respositories</a></router-link>


    <div id="nav">

      <form>
  <div class="form-group">
  <span style="color:green;">{{message}}</span><br>
    <label for="exampleInputEmail1">Name</label>
    <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name">

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input v-model="description" type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Description of project">
  </div>
   <div class="form-group">
    <label for="exampleFormControlSelect2">Private</label>
    <select multiple class="form-control" id="exampleFormControlSelect2" >
      <option>True</option>
      <option>False</option>
    
    </select>
  </div>
</form>
<a class="btn btn-primary" v-on:click="submitData()" >Create Repo</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
export default{

data(){
  return{
    message:'',
    username: '',
    name:'',
    description:'',
    homepage: 'http:localhost:8080',

  }
},
created(){
      this.username = localStorage.getItem('userName');
      console.log(userName);
  },
 methods: {
 submitData() {
       axios
        .post('https://api.github.com/'+ localStorage.getItem('username') +'/'+ 'repos', {
           name: this.name,
          description: this.description,
            homepage: this.homepage,
           private: false,
            has_issues: true,
            has_projects: true,
            has_wiki: true
        })
       .then(function(){
          this.status="repo created successfully"
        });
    }
    
    }
  }
</script>

