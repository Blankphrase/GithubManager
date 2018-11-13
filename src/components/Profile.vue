<template>
<div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
   <router-link v-bind:to="'/respositories/' + profiless.login"> <a href="" class="btn btn-primary" >Respositories</a></router-link>


    <div id="profile">
  <h2>My Profile</h2>
<ul>
<li>
   <span class="name"><b>Username:</b> {{profiless.login}}</span>
</li>
<li>
   <span class="name"><b>Name:</b> {{profiless.name}}</span>
</li>
<li>
   <span class="name"><b>Location:</b> {{profiless.location}}</span>
</li>
<li>
   <span class="name"<b>Email:</b> {{profiless.email}}</span>
</li>
<li>
   <span class="name"><b>Bio:</b> {{profiless.bio}}</span>
</li>
<li>
   <span class="name"><b>Public Repos:</b> {{profiless.public_repos}}</span>
</li>
<li>
   <span class="name"><b>Time Created:</b> {{profiless.created_at}}</span>
</li>
<li>
   <span class="name"><b>Time Updated:</b> {{profiless.updated_at}}</span>
</li>
<li>
   <span class="name"><b>URL:</b> {{profiless.url}}</span>
   
</li>
  </ul>
    <router-view/>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default{
data(){
  return {
    username: ''
  }
},

 mounted () {
    this.$store.dispatch('loadProfiles');
      
  },
    computed: {
      profiless(){
     return this.$store.state.profiles;
    
    },
     setUsername(){

     }
   
},
methods:{
    

},
created(){
}
}
</script>

<style scoped>
#profile{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#profile ul{
    padding: 0;
    list-style-type: none;
}
#profile li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
