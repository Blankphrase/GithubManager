<template>
<div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
    <router-link v-bind:to="'/respositories/'+ this.username"><a href="" class="btn btn-primary" >Respositories</a></router-link>
  

    <div id="respositories">
  <h2>Repository Contents</h2>
  <ul > 
  <li >
 
  <span class="name"><b>Name: </b>{{contents.name}}</span><br>
  <span class="name"><b>html_url: </b>{{contents.html_url}}</span><br>
  <span class="name"><b>deployments_url: </b>{{contents.deployments_url}}</span><br>
  <span class="name"><b>Owner login</b>{{contents.owner.login}}</span>
  <span class="name"><b></b>{{contents.subscription_url}}</span>
   
</li>
<br>
{{repo}}

  </ul>
    <router-view/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'

export default{
 data () {
     return{
         repo:'',
         username:''
     }
  },
  created(){
      let repo =this.$route.params.repo;
      localStorage.setItem('repo',repo);
      this.username = localStorage.getItem('userName');
  },
   mounted () {
    this.$store.dispatch('loadContents')
  },
    computed: {
    contents(){
    return this.$store.state.contents;
    }
}
}
</script>

<style scoped>
#respositories{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#respositories ul{
    padding: 0;
    list-style-type: none;
}
#respositories li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.commit{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
.date{
    margin-left:5px;
}
</style>
