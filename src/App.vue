<template>
  <div id="app">
   
      <nav class="navbar navbar-dark bg-dark">
        <router-link class="router-link" :to="{name : 'cars'}">Cars</router-link>
        <router-link class="router-link" :to="{name : 'add-car'}">Add Car</router-link> 
        
        <router-link class="router-link" v-if="!isUserAuthenticated" :to="{name : 'login'}">Login</router-link> 
        <router-link class="router-link" v-if="!isUserAuthenticated" :to="{name : 'register'}">Register</router-link>  
        <button v-if="isUserAuthenticated" @click="onLogout" type="button" class="btn btn-dark btn-sm">Log out</button>
      </nav>
      
    <router-view/>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
      ...mapGetters({
          isUserAuthenticated: "auth/isUserAuthenticated",
          cars:'cars',
      }),
  },
    methods: {
        ...mapActions({
          logout: "auth/logout"
        }),

        onLogout() {
          this.logout();
          this.$router.push({
            name:"login"
          });
        }
}

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #dce0e4;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
     form {display: flex;
        flex-direction: column;
     }

     form button {
       width: 100px;
       margin-left: auto;
       margin-right: auto;
     }

.router-link {
  color: white;
}

.router-link:hover {
  color: white;
  text-decoration: none;
}
</style>
