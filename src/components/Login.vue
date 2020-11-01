<template>
    <div>
        <h1>
            Login
        </h1>

        <form class="px-4 py-3" @submit.prevent="submit">
            <div class="alert alert-danger" v-if="errors.length"> 
                <ul class="mb-0">
                    <li v-for="(error,index) in errors" :key="index">{{error}}</li>
                </ul>
            </div>
                <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" v-model="email" class="form-control" id="email" placeholder="email@example.com">
                </div>
                <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="form-group">

                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
       
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'Login',

    data() {
        return {
            email: "",
            password: "",
            errors: []
        };
    },

    methods: {
        ...mapActions({
            login: 'auth/login'
        }),

        submit() {
               this.login({
                    email: this.email,
                    password: this.password
                }).then(() => {

                    if(this.error === null) 
                    console.log('asdf')
                    this.$router.push({ name: "cars"});
                });
            }
  

    }
}
</script>

<style  scoped>
    .px-4, .py-3 {
        width: 600px;
        margin-left: 401px;
    }
</style>