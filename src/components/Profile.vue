<template>
<div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
   <router-link v-bind:to="'/repositories/' + profile.login"> <a href="" class="btn btn-primary" >Respositories</a></router-link>


    <div id="profile">
  <h2>My Profile</h2>
<ul>
<li>
   <span class="name"><b>Username:</b> {{profile.login}}</span>
</li>
<li>
   <span class="name"><b>Name:</b> {{profile.name}}</span>
</li>
<li>
   <span class="name"><b>Location:</b> {{profile.location}}</span>
</li>
<li>
   <span class="name"><b>Email:</b> {{profile.email}}</span>
</li>
<li>
   <span class="name"><b>Bio:</b> {{profile.bio}}</span>
</li>
<li>
   <span class="name"><b>Public Repos:</b> {{profile.public_repos}}</span>
</li>
<li>
   <span class="name"><b>Time Created:</b> {{profile.created_at}}</span>
</li>
<li>
   <span class="name"><b>Time Updated:</b> {{profile.updated_at}}</span>
</li>
<li>
   <span class="name"><b>URL:</b> {{profile.url}}</span>
   
</li>
  </ul>
    <router-view/>
  </div>
  </div>
</template>

<script>
export default{
data(){
  return {
    username: ''
  }
},

 mounted () {
    this.$store.dispatch('getProfiles');
      
  },
    computed: {
      profile(){
        return this.$store.state.profiles;
    },
   
},
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
</style>

