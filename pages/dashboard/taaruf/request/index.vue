<template>
  <div
    class="kt-content kt-content--fit-top kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
    id="kt_content"
  >
    <!-- begin:: Subheader -->
    <div class="kt-subheader kt-grid__item" id="kt_subheader">
      <div class="kt-container">
        <div class="kt-subheader__main">
          <h3 class="kt-subheader__title">Permintaan Ta'aruf {{isAccepted ? 'yang di terima' : 'yang di kirim'}}</h3>

          <div class="kt-subheader__breadcrumbs">
            <a href="#" class="kt-subheader__breadcrumbs-home">
              <i class="flaticon2-shelter"></i>
            </a>
            <span class="kt-subheader__breadcrumbs-separator"></span>
            <a href class="kt-subheader__breadcrumbs-link">Dashboard</a>
            <span class="kt-subheader__breadcrumbs-separator"></span>
            <a href class="kt-subheader__breadcrumbs-link">Default Dashboard</a>
          </div>
        </div>
      </div>
    </div>
    <!-- end:: Subheader -->

    <!-- begin:: Content -->
    <div class="kt-container kt-grid__item kt-grid__item--fluid">
      <template v-if="tempData && tempData.length > 0">
        <mw-request-card :initData="obj" v-for="(obj, index) in tempData" :key="index"/>
      </template>
      <div v-else><span>Kosong Bro</span></div>
    </div>
    <!-- end:: Content -->
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import DashboardService from "~/service/dashboardService.js";
import RequestCard from "~/components/Taaruf/RequestCard";
import PartnerService from "~/service/partnerService";


export default {
  layout: "dashboard",
  middleware: "auth",
  components: {
    Logo,
    'mw-request-card': RequestCard
  },
  data() {
    return {
      'tempData': [],
      'isAccepted': true
    }
  },
  async asyncData({$axios, params, $auth, route}) {
    try {
      const isAccepted = route.query['faccepted'] ? route.query['faccepted'] : false;
      const partnerService = new PartnerService($axios, $auth);
      const partnerData = await partnerService.getRequestPartnersMe({isAccepted});
      console.log('partnertdata', route.query)
      return {
        'tempData': partnerData.data,
        isAccepted
      }
    } catch (error) {
      console.error(error)
    }
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

