<template>
  <section class="fdb-block">
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
              <div class="col mt-4">
                <input type="text" class="form-control" placeholder="Email" v-model="user.username" />
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="user.password"
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
export default  {
  middleware: 'isGuestMiddleware',
  components: {
    Logo
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      errors: [],
      authService: null
    };
  },
  methods: {
    onLogin: function(e) {
        // this.authService.postLogin(this.user).then(res => {
        //     console.log()
        //     localStorage.setItem("authID", res.data);
        //     this.$router.push({path: '/'})
        // }).catch(res => {
        //     let response = res.response;
        //     if(response.status === 400) {
        //         console.error(response.data)
        //     }
        // })
        this.fetchLogin()
        e.preventDefault();
    },
    async fetchLogin() {
      try {
        //this.$toast.show("Logging in...", { icon: "fingerprint" });
        await this.$auth
          .loginWith("local", {
            data: this.user
          })
          .catch(e => {
            console.error('error', e)
            // this.$toast.error("Failed Logging In", { icon: "error_outline" });
          });
          console.log(this.$auth.loggedIn, 'loggedIn')
        if (this.$auth.loggedIn) {
          this.$router.push({path: '/'})
          //this.$toast.success('Successfully Logged In', {icon: "done"});
        }
      } catch (e) {
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

