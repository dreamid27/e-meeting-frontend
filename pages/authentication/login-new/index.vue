<template>
  <div class="kt-grid kt-grid--ver kt-grid--root kt-page wrappr">
	<Loading v-if="isLoading" />
    <div
      class="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v5 kt-login--signin"
      id="kt_login"
    >
      <div
        class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile"
        :style="{backgroundImage: `url(${require('~/assets/media/bg/bg-3.jpg')})`}"
      >
        <div class="kt-login__left">
          <div class="kt-login__wrapper">
            <div class="kt-login__content">
              <a class="kt-login__logo" href="#">
                <img src="~/assets/media/logos/logo-5.png" />
              </a>

              <h3 class="kt-login__title">JOIN OUR GREAT COMMUNITY</h3>

              <span
                class="kt-login__desc"
              >The ultimate Bootstrap & Angular 6 admin theme framework for next generation web apps.</span>

              <div class="kt-login__actions">
                <button
                  type="button"
                  id="kt_login_signup"
                  class="btn btn-outline-brand btn-pill"
                >Get An Account</button>
              </div>
            </div>
          </div>
        </div>

        <div class="kt-login__divider">
          <div></div>
        </div>

        <div class="kt-login__right">
          <div class="kt-login__wrapper">
            <div class="kt-login__signin">
              <div class="kt-login__head">
                <h3 class="kt-login__title">Login To Your Account</h3>
              </div>
              <div class="kt-login__form">
                <form class="kt-form" @submit="onLogin">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email atau Username"
                      autocomplete="off"
                      v-model="user.userID"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-last"
                      placeholder="Password"
                      v-model="user.password"
                      required
                    />
                  </div>
                  <div class="row kt-login__extra">
                    <div class="col kt-align-left">
                      <label class="kt-checkbox">
                        <input type="checkbox" name="remember" /> Remember me
                        <span></span>
                      </label>
                    </div>
                    <div class="col kt-align-right">
                      <a href="javascript:;" id="kt_login_forgot" class="kt-link">Forget Password ?</a>
                    </div>
                  </div>
                  <div class="kt-login__actions">
					<button class="btn btn-brand btn-pill kt-login__btn-primary" type="submit">Sign In</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="kt-login__forgot">
              <div class="kt-login__head">
                <h3 class="kt-login__title">Forgotten Password ?</h3>
                <div class="kt-login__desc">Enter your email to reset your password:</div>
              </div>
              <div class="kt-login__form">
                <form class="kt-form" action>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Email"
                      name="email"
                      id="kt_email"
                      autocomplete="off"
                    />
                  </div>
                  <div class="kt-login__actions">
                    <button
                      id="kt_login_forgot_submit"
                      class="btn btn-brand btn-pill btn-elevate"
                    >Request</button>
                    <button
                      id="kt_login_forgot_cancel"
                      class="btn btn-outline-brand btn-pill"
                    >Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- end:: Page -->
</template>

<script>
import Logo from "~/components/Logo.vue";
import AuthService from "~/service/authentication";
import Loading from "~/components/Loading";

export default {
  middleware: "isGuestMiddleware",
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
      messageError: ""
    };
  },
  methods: {
    onLogin: function(e) {
		console.log('eyy')
      if (!this.isLoading) {
        this.isLoading = true;
        this.messageError = "";
        this.fetchLogin();
      }
      e.preventDefault();
    },
    async fetchLogin() {
      try {
        await this.$auth.loginWith("local", { data: this.user });
        if (this.$auth.loggedIn) {
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 3000);
        }
        this.isLoading = false;
      } catch (e) {
        this.messageError = e.response.data;
        this.isLoading = false;
        console.error("error", e);
      }
    }
  },
  beforeMount() {
    this.authService = new AuthService(this.$axios);
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

