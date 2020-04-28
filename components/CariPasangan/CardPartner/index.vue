<template>
  <div class="card-partner">
    <div class="card-partner__container">
      <div class="card-partner__desc">
        <div class="card-partner__desc-info">
          <div class="card-partner__desc-last-active">Aktif terakhir 1 bulan yg lalu</div>
          <div aclass="card-partner__desc">A8682, 23th</div>
          <div class="card-partner__desc-domisili">Single, Pemerintah, Kota Bandung</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardService from "~/service/dashboardService.js";
import PartnerService from "../../../service/partnerService";

export default {
  props: ["initData"],
  methods: {
    mappingModel() {},
    requestTaaruf() {
      this.$emit("onClickRequest", this.initData.user_id);
    }
  },
  beforeMount() {
    console.log(this.initData);
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

