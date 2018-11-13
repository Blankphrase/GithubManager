<template>
<div id="app">
    <a href="/profile" class="btn btn-primary" >Profile</a>
     <router-link v-bind:to="'/repositories/'+ this.username"><a href="" class="btn btn-primary" >Respositories</a></router-link>

  

    <div id="respositories">
  <h2>My commits</h2>
  <ul v-for="commit in commits" :key="commit.id">
  <li >
   <span class="name"><b>Commit Message:</b> {{commit.commit.message}}</span><br>

   <span class="name"><b>Commit Arthur <br>Name:</b> {{commit.commit.author.name}}</span><br>
   <span class="name"><b>Email:</b> {{commit.commit.author.email}}</span><br>
   <span class="name"><b>Date:</b> {{commit.commit.author.date}}</span><br>

   <span class="name"><b>Url:</b> {{commit.commit.url}}</span>
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
      this.username = localStorage.getItem('username');
      localStorage.setItem('repository',repository);
  },
   mounted () {
    this.$store.dispatch('getCommits')
  },
    computed: {
    commits(){
    return this.$store.state.commits;
    }
}
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
</style>
