<template>
  <!--Begin::Portlet-->
  <div class="kt-portlet kt-portlet--height-fluid">
    <div class="kt-portlet__body">
      <!--begin::Widget -->
      <div class="kt-widget kt-widget--user-profile-2">
        <div class="kt-widget__body">
          <div class="kt-widget__section">
            I distinguish three
            <a
              href="#"
              class="kt-font-brand kt-link kt-font-transform-u kt-font-bold"
            >#xrs-54pq</a>
            objectsves First
            esetablished and nice coocked rice
          </div>

          <div class="kt-widget__item">
            <div class="kt-widget__contact">
              <span class="kt-widget__label">Email:</span>
              <a href="#" class="kt-widget__data">luca@festudios.com</a>
            </div>
            <div class="kt-widget__contact">
              <span class="kt-widget__label">Phone:</span>
              <a href="#" class="kt-widget__data">44(76)34254578</a>
            </div>
            <div class="kt-widget__contact">
              <span class="kt-widget__label">Location:</span>
              <span class="kt-widget__data">Barcelona</span>
            </div>
          </div>
        </div>

        <div class="kt-widget__footer">
            <button type="button" class="btn btn-label-warning btn-lg btn-upper mb-6">
                Lihat Detail
            </button>
            <button type="button" class="btn btn-label-brand btn-lg btn-upper" @click="requestTaaruf">
                Ajukan Ta'aruf
            </button>
        </div>
      </div>
      <!--end::Widget -->
    </div>
  </div>
  <!--End::Portlet-->
</template>

<script>
import DashboardService from "~/service/dashboardService.js";
import PartnerService from '../../../service/partnerService';

export default {
    props: ['initData'],
    methods: {
        mappingModel() {

        },
        requestTaaruf() {
            this.$emit('onClickRequest', this.initData.user_id);
        }
    },
    beforeMount() {
        console.log(this.initData);
    }
};
</script>
<style lang="scss" scoped src="./index.scss" />

