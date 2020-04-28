<template>
  <div class="search-partner wrapper">
    <div class="search-partner__container">
      <div class="search-partner__desc">
        <h2>Pilih Akhwat untuk mengajukan CV</h2>
      </div>
      <div class="search-partner__filter">
        <div class="search-parter__filter-container">
          <a href="#" class="button-rounded action">
            Filter
          </a>
           <a href="#" class="button-rounded action">
              Favorit
            </a>
        </div>
      </div>
      <div class="search-partner__list-container">
        <div class="search-partner__item" v-for="(obj, index) in tempData" :key="index">
            <mw-cardpartner :initData="obj" @onClickRequest="requestTaaruf" />
        </div>
      </div>
    </div>
  </div>
  <!-- <div
    class="kt-content kt-content--fit-top kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
    id="kt_content"
  >
    <div class="kt-subheader kt-grid__item" id="kt_subheader">
      <div class="kt-container">
        <div class="kt-subheader__main">
          <h3 class="kt-subheader__title">Cari Pasangan</h3>

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
    <div class="kt-container kt-grid__item kt-grid__item--fluid">
      <div class="row">
        <div class="col-xl-3" v-for="(obj, index) in tempData" :key="index">
          <mw-cardpartner :initData="obj" @onClickRequest="requestTaaruf" />
        </div>
      </div>
      <mw-confirmation v-show="isShowModalConfirmation" @onSubmit="confirmRequestTaaruf" @onClose="closeModalConfirmation" :initData="dataModal" />
    </div>
  </div> -->
</template>

<script>
import Logo from "~/components/Logo.vue";
import DashboardService from "~/service/dashboardService.js";
import CardPartner from "~/components/CariPasangan/CardPartner";
import PartnerService from "~/service/partnerService";
import ModalConfirmation from "~/components/CariPasangan/ModalConfirmation";

export default {
  layout: "dashboard",
  middleware: "auth",
  data() {
    return {
      pagination : {
        currentPage: 0,
        maxLimitPage: 10
      },
      tempData: [],
      isFetching: false,
      isShowModalConfirmation: false,
      dataModal: null
    }
  },
  components: {
    Logo,
    'mw-cardpartner': CardPartner,
    'mw-confirmation': ModalConfirmation
  },
  methods: {
    fetchData: async function() {
      if (!this.isFetching && this.pagination.maxLimitPage > this.pagination.currentPage) {
        console.log('fetch data');
        const partnerService = new PartnerService(this.$axios, this.$auth);
        const partnerParams = {'limit': 10, 'page': this.pagination.currentPage = this.pagination.currentPage + 1};
        const partnerData = await partnerService.getPartners(partnerParams);
        this.tempData = [...this.tempData, ...partnerData.data];
        console.log(this.tempData);
      }
    },
    requestTaaruf(_partnerId) {
      this.isShowModalConfirmation = true;
      this.dataModal = _partnerId;
    },
    confirmRequestTaaruf(_partnerId) {
      this.closeModalConfirmation();
      const partnerService = new PartnerService(this.$axios, this.$auth);
      const data = {
          'partner_id': _partnerId,
          'type': 'taaruf'
      }

      const resPartner = partnerService.postRequestTaaruf(data).then(obj => {
          //show notification
          console.log(obj, 'then');
      }).catch(obj => {
          console.log(obj.response, 'ode');
      });
      console.log(resPartner);
    },
    closeModalConfirmation() {
      this.isShowModalConfirmation = false;
    }
  },
  beforeMount() {
    window.addEventListener('scroll', () => { 
      if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 400)) {
          this.fetchData();
        }
     }, false);
  },
  async asyncData({$axios, params, $auth}) {
    const partnerService = new PartnerService($axios, $auth);
    const partnerParams = {'limit': 10, 'page': 0};
    const partnerData = await partnerService.getPartners(partnerParams);
    
    return {
      'tempData': partnerData.data
    }
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

