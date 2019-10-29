<template>
  <section class="fdb-block">
    <Loading v-if="isLoading" />
    <div
      class="container py-5 my-5"
      style="background-image: url(https://img.pngio.com/shape-png-free-download-free-shapes-png-493_315.png);"
    >
      <div class="row justify-content-end">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5 text-left">
          <form class="fdb-box" @submit="onLogin">
            <div class="row">
              <div class="col">
                <h1>Log In</h1>
                <p class="lead">Hai, anda terlihat asing, login sini.</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <b-alert :show="messageError != ''" variant="danger">{{ messageError }}</b-alert>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Email atau Username" v-model="user.userID" />
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="user.password"
                  required
                />
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
import AuthService from "~/service/authentication";
import Loading from "~/components/Loading";

export default  {
  middleware: 'isGuestMiddleware',
  components: {
    Logo,
    Loading
  },
  data() {
    return {
      user: {
        userID: "",
        password: ""
      },
      errors: [],
      authService: null,
      isLoading: false,
      messageError: ''
    };
  },
  methods: {
    onLogin: function(e) {
      if (!this.isLoading) {
        this.isLoading = true;
        this.messageError = '';
        this.fetchLogin()
      }
      e.preventDefault();
    },
    async fetchLogin() {
      try {
        await this.$auth.loginWith("local", {data: this.user})
        if (this.$auth.loggedIn) {
          setTimeout(() => {
            this.$router.push({path: '/'})
          }, 3000);
        }
        this.isLoading = false;
      } catch (e) {
        this.messageError = e.response.data
        this.isLoading = false;
        console.error('error', e)
      }

    }
  },
  beforeMount() {
    this.authService = new AuthService(this.$axios);
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

