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
              <input ref="username" type="text" class="form-control " :class="{'is-invalid': $v.userForm.username.$error && $v.userForm.username.$dirty }" placeholder="Username" v-model.trim.lazy="$v.userForm.username.$model" @keydown="$v.userForm.username.$reset()"> 
              <!-- <input type="text" class="form-control " :class="{ 'is-valid': !$v.userForm.username.$error && $v.userForm.username.$dirty, 'is-invalid': $v.userForm.username.$error && $v.userForm.username.$dirty }" placeholder="Username" v-model.trim.lazy="$v.userForm.username.$model" @keydown="$v.userForm.username.$reset()">  -->
              <div class="invalid-feedback"  v-if="$v.userForm.username.$error && !$v.userForm.username.required">
                Username tidak boleh kosong.
              </div>
              <div class="invalid-feedback"  v-if="$v.userForm.username.$error && !$v.userForm.username.minLength">
                Username minimal 4 karakter.
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col mt-4">
                <input type="text" class="form-control " :class="{ 'is-invalid': $v.userForm.email.$error && $v.userForm.email.$dirty }" placeholder="Email" v-model.trim.lazy="$v.userForm.email.$model" @keydown="$v.userForm.email.$reset()"> 
                <!-- <input type="text" class="form-control " :class="{ 'is-valid': !$v.userForm.email.$error && $v.userForm.email.$dirty, 'is-invalid': $v.userForm.email.$error && $v.userForm.email.$dirty }" placeholder="Email" v-model.trim.lazy="$v.userForm.email.$model" @keydown="$v.userForm.email.$reset()">  -->
                <div class="invalid-feedback"  v-if="$v.userForm.email.$error && !$v.userForm.email.required">
                  Email tidak boleh kosong.
                </div>
                <div class="invalid-feedback"  v-if="$v.userForm.email.$error && !$v.userForm.email.validEmail">
                  Format email salah, contoh: abdul@meeting.com
                </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
                <input type="password" class="form-control " :class="{ 'is-invalid': $v.userForm.password.$error && $v.userForm.password.$dirty }" placeholder="Password" v-model.trim.lazy="$v.userForm.password.$model" @keydown="$v.userForm.password.$reset()"> 
                <!-- <input type="password" class="form-control " :class="{ 'is-valid': !$v.userForm.password.$error && $v.userForm.password.$dirty, 'is-invalid': $v.userForm.password.$error && $v.userForm.password.$dirty }" placeholder="Password" v-model.trim.lazy="$v.userForm.password.$model" @keydown="$v.userForm.password.$reset()">  -->
                <div class="invalid-feedback"  v-if="$v.userForm.password.$error && !$v.userForm.password.required">
                  Password tidak boleh kosong.
                </div>
                <div class="invalid-feedback"  v-if="$v.userForm.password.$error && !$v.userForm.password.minLength">
                  Masukan password minimal 6 karakter.
                </div>
            </div>
          </div>
            <div class="row mt-4">
            <div class="col">
                <input type="password" class="form-control " :class="{ 'is-invalid': $v.userForm.confirmPassword.$error && $v.userForm.confirmPassword.$dirty }" placeholder="Konfirmasi Password" v-model.trim="$v.userForm.confirmPassword.$model"> 
                <!-- <input type="password" class="form-control " :class="{ 'is-valid': !$v.userForm.confirmPassword.$error && $v.userForm.confirmPassword.$dirty, 'is-invalid': $v.userForm.confirmPassword.$error && $v.userForm.confirmPassword.$dirty }" placeholder="Confirm Password" v-model.trim="$v.userForm.confirmPassword.$model">  -->
                <div class="invalid-feedback"  v-if="$v.userForm.confirmPassword.$error && !$v.userForm.confirmPassword.sameAsPassword">
                 Password berbeda dengan yang dimasukan sebelumnya.
                </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <button class="btn btn-secondary" type="submit">Daftar</button>
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
import { required, minLength, between, email, sameAs} from 'vuelidate/lib/validators'
export default {
  middleware: 'isGuestMiddleware',
  components: {
    Logo
  },
  data() {
      return {
          userForm: {
              username: '',
              password: '',
              email: '',
              confirmPassword: ''
          },
          errors: [],
          authService: null
      }
  },
    methods: {
      onRegister(e) {
          //Menampilkan apakah input yang diisi sudah benar. untuk reference check : https://vuelidate.netlify.com/#sub-form-submission
          this.$v.$touch()
          if (!this.$v.$invalid) {
            this.authService.postRegister(this.userForm).then(res => {
              setTimeout(this.$router.push({path: '/authentication/login'}), 3000)
            }).catch(res => {
                let response = res.response;
                if(response.status === 400) {
                    console.error(response.data)
                }
            })
          }

          //mencegah html agar tidak menjalankan method submit
          e.preventDefault(); 
      }
  },
  beforeMount() {
      this.authService = new AuthService(this.$axios)  
  },
  mounted() {
    //Focus to input username
    this.$refs.username.focus();
  },
  validations: {
    userForm: {
      username : {required, minLength: minLength(4)},
      password: {required, minLength: minLength(6)},
      confirmPassword: {sameAsPassword: sameAs('password')},
      email: {required, validEmail: email}
    },
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

