<template>
  <profile-content :activeSection="section" :initData="profileData" :initCities="cityList" :initProvince="provinceList" >
  </profile-content>
</template>

<script>
import Logo from "~/components/Logo.vue";
import DashboardService from "~/service/dashboardService.js";
import SideMenu from "~/components/Profile/SideMenu";
import Content from "~/components/Profile/Content";
import ProfileService from '~/service/profileService';
import cities from '~/assets/data/cities.json';
import province from '~/assets/data/province.json';
import Loading from "~/components/Loading";

export default {
  layout: "dashboard",
  middleware: "auth",
  components: {
    "profile-sidemenu": SideMenu,
    "profile-content": Content,
    "Loading": Loading
  },
  computed: {
    isLoading() {
      return this.$store.getters['isLoading'];
    }
  },
  async asyncData({params, $axios, $auth, route, redirect, store}) {
    try {
        const validSection = ['informasi-personal', 'gambaran-fisik', 'gambaran-diri', 'data-keluarga', 'pendidikan', 'ibadah', 'pengalaman'];
        if (!validSection.find(x => x == params.section)) return redirect('/profile');
        
        const profileService = new ProfileService($axios, $auth);
        const objModel = await profileService.getMyProfile(); 
        const isContinue = route.query['iscontinue'] == 1;
        store.dispatch('profile/setIsContinueSaving', isContinue);
        store.dispatch('profile/setSection', params.section);
        const cityList = cities.sort(function(a, b) { if (a.name > b.name) { return 1; } if (a.name < b.name) { return -1;} return 0 }).map((obj) => { return {'province_id': obj.province_id, 'label': obj.name, 'value': obj.name}  })
        const provinceList = province.map(obj => { return { 'label': obj.name, 'value': obj.name, 'id': obj.id }});
        return {profileData: objModel.data, cityList, provinceList, section: params.section};
    } catch (error) {
      console.error(error);
    }
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

