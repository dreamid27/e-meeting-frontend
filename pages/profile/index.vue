<template>
  <section class="fdb-block">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <h1>Ini Halaman Profile</h1>
      </div>
    </div>
    <div class="row text-center justify-content-center">
      Belum jadi bro websitenya, sabar ya !
    </div>

    <div class="row mt-5 justify-content-center">
      <div class="col-8">
        <img alt="image" class="img-fluid" src="~/assets/imgs/draws/product-tour.svg">
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import DashboardService from '~/service/dashboardService.js';

export default {
  middleware: 'auth',
  components: {
    Logo
  },
  beforeMount() {
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

