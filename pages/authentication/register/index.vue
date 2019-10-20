<template>
<section class="fdb-block">
  <div class="container py-5 my-5" style="background-image: url(https://img.pngio.com/shape-png-free-download-free-shapes-png-493_315.png);">
    <div class=" row justify-content-end">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 text-left">
        <form class="fdb-box" @submit="onRegister">
          <div class="row">
            <div class="col">
              <h1>Register</h1>
              <p class="lead">Lah belum daftar, daftar daftar daftar !</p>
            </div>
          </div>
         
          <div class="row">
            <div class="col mt-4">
              <input type="text" class="form-control" placeholder="Username" v-model="user.username" >
            </div>
          </div>
          <div class="row">
            <div class="col mt-4">
              <input type="text" class="form-control" placeholder="Email" v-model="user.email" >
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input type="password" class="form-control" placeholder="Password" v-model="user.password">  
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <button class="btn btn-secondary" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>

import Logo from "~/components/Logo.vue";
import AuthService from '~/service/authentication';
export default {
  middleware: 'guest',
  components: {
    Logo
  },
  data() {
      return {
          user: {
              username: '',
              password: ''
          },
          errors: [],
          authService: null
      }
  },
    methods: {
      onRegister(e) {
          this.authService.postRegister(this.user).then(res => {
               this.$router.push({path: '/authentication/login'})
          }).catch(res => {
              let response = res.response;
              if(response.status === 400) {
                  console.error(response.data)
              }
          })
          e.preventDefault(); 
      }
  },
  beforeMount() {
      this.authService = new AuthService(this.$axios)  
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

