<template>
  <div
    class="dashboard-wrapper kt-page--loading-enabled kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header--minimize-menu kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent"
  >
    <Loading v-if="isLoading" />
    <Header />
    <div
      class="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch big-wrapper"
    >
      <section
        class="kt-content kt-content--fit-top kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
      >
        <!-- begin:: Content -->
        <div class="kt-container kt-grid__item kt-grid__item--fluid">
          <!--Begin::App-->
          <div class="kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app">
            <!--Begin:: App Aside Mobile Toggle-->
            <button class="kt-app__aside-close" id="kt_user_profile_aside_close">
              <i class="la la-close"></i>
            </button>
            <!--End:: App Aside Mobile Toggle-->
            <profile-sidemenu :activeMenu="section" />
            <!--Begin:: App Content-->
            <nuxt />
            <!--End:: App Content-->
          </div>
          <!--End::App-->
        </div>
        <!-- end:: Content -->
      </section>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Layout/Header/index.vue";
import Footer from "~/components/Layout/Footer/index.vue";
import Loading from "~/components/Loading";
import SideMenu from "~/components/Profile/SideMenu";
import axios from "axios";

export default {
  components: {
    Header,
    Footer,
    Loading,
    "profile-sidemenu": SideMenu,
  },
  computed: {
      section() {
          return this.$store.getters['profile/getSection'];
      },
      isLoading() {
        return this.$store.getters['isLoading'];
    }
  }
};
</script>

<style lang="scss" src="./profile.scss" />

