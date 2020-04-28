<template>
  <div class="dashboard">
    <div class="background-abs">
    </div>
    <div class="dashboard__container wrapper">
      <div class="menu-container">
          <menu-card v-for="(obj,idx) in menuList" :key="idx" :initData="obj" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import DashboardService from "~/service/dashboardService.js";
import MenuCard from '~/components/Custom/MenuCard';

export default {
  layout: "dashboard",
  middleware: "auth",
  components: {
    Logo,
    MenuCard
  },
  data() {
    return {
      menuList: [ 
        {image: 'send.png', desc: 'Lorem ipsum harem mesum',title: 'Pengajuan CV', link: 'dashboard/cari-pasangan'}, 
        {image: 'send.png', desc: 'Lorem ipsum harem mesum', title: 'Menerima CV', link: 'send-cv'}, 
        {image: 'send.png', desc: 'Lorem ipsum harem mesum', title: 'Kelas Pra Nikah', link: 'send-cv'}]
    }
  },
  methods: {
    // navigateMenu(menuLink) {
    //   this.$route.push(menuLink);
    // }
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

