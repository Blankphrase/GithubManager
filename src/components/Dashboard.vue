<template>
  <div class="home">
<h1 align="center" style="margin-top:5%;">Hello, We Are Glad You Are Here!!!!!</h1>
  <h3 align="center" margin-top="5%">Welcome to github manager App</h3>
    <h5 align="center" margin-top="5%">Click the button below to proceed to your dashboard</h5>
    <a id="login-button" href="/profile">Proceed To Your Dashboard</a>
    
  </div>
</template>

<script>
import axios from 'axios'
import Qs from 'qs';
export default {
  name: 'Dashboard',
  computed: {
     
  },
  data () {
    return {
      client: '',
      usereState: '',
    }
  },
  methods: {
  },

  mounted () {
 
  },

  created(){
    this.u=this.$route.query.code;
    this.userState=this.$route.query.state;

     axios
        .get('https://github.com/login/oauth/access_token?' + Qs.stringify({
            client_id: '5529f03c82440fcac6f4',
            client_secret: '3109e6d444556427bcd3a8a0b20674543a413ce1',
            code: this.userCode,
            userState: this.userState,
            scope: 'repo'
        }))
        .then(function(response){
          let accessToken= response.request.responseText;
          localStorage.setItem('accessToken', accessToken)
        });
        
      }
}
</script>
<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
</style>
