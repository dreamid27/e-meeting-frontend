<template>
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
        <profile-sidemenu />
        <!--Begin:: App Content-->
        <profile-content :initData="profileData" :initCities="cityList" :initProvince="provinceList" />
        <!--End:: App Content-->
      </div>
      <!--End::App-->
    </div>
    <!-- end:: Content -->
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import DashboardService from "~/service/dashboardService.js";
import SideMenu from "~/components/Profile/SideMenu";
import Content from "~/components/Profile/Content";
import ProfileService from '~/service/profileService';
import cities from '~/assets/data/cities.json';
import province from '~/assets/data/province.json';

export default {
  layout: "dashboard",
  middleware: "auth",
  components: {
    "profile-sidemenu": SideMenu,
    "profile-content": Content
  },
  async asyncData({params, $axios, $auth, route}) {
    try {
        const profileService = new ProfileService($axios, $auth);
        const objModel = await profileService.getMyProfile(); 
        return {profileData: objModel.data};
    } catch (error) {
      console.error(error);
    }
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

