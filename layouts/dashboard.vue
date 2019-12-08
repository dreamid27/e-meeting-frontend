<template>
  <div class="dashboard-wrapper kt-page--loading-enabled kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header--minimize-menu kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent">
    <!-- <SideMenu /> -->
    <Header />
    <div class="kt-body kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-grid--stretch big-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Layout/Header/index.vue';
import Footer from '~/components/Layout/Footer/index.vue';
import SideMenu from '~/components/Layout/SideMenu';
import axios from 'axios';

export default {
  components: {
    Header,
    Footer,
    SideMenu
  }
}
</script>

<style lang="scss" src="./dashboard.scss" />

