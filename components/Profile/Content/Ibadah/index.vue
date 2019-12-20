<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="kt-portlet">
        <div class="kt-portlet__head">
          <div class="kt-portlet__head-label">
            <h3 class="kt-portlet__head-title">
              Ibadah
              <small>Silahkan Isi dengan baik dan jujur, Allah maha melihat</small>
            </h3>
          </div>
        </div>
        <form class="kt-form kt-form--label-right form-family" @submit.prevent="onSave">
          <div class="form-group row">
            <div class="col">
              <label>Jenis Ibadah</label>
              <mw-dropdown
                :searchBarActive="false"
                :placeholder="'Pilih Ibadah'"
                :initData="prayList"
                v-model="formAdd['pray_type']"
                :customClass="'form-control-sm'"
              />
            </div>
            <div class="col">
              <label>Keterangan</label>
              <textarea
                class="form-control form-control-sm"
                id="appreciation"
                rows="3"
                v-model="formAdd['description']"
              ></textarea>
            </div>
          </div>
          <div class="kt-form__action">
            <button type="submit" class="btn btn-sm btn-success">Submit</button>&nbsp;
          </div>
        </form>
        <div class="kt-portlet__body">
          <div class="kt-section__body">
            <div class="kt-widget31">
              <div class="kt-widget31__item" v-for="(obj, idx) in formData" :key="idx">
                <div class="kt-widget31__content">
                  <div class="kt-widget31__info">
                    <a href="#" class="kt-widget31__username">{{obj.pray_type || '' }}</a>
                    <p class="kt-widget31__text">{{obj.description || ''}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardService from "~/service/dashboardService.js";
import ProfileService from "~/service/profileService";
import Dropdown from "~/components/Custom/dropdown";
import DatePicker from "~/components/Custom/datepicker";

export default {
  props: ["initData", "initCities", "initProvince"],
  data() {
    return {
      formData: [],
      formAdd: {},
      prayList: [
        { label: "Shalat 5 Waktu", value: "Shalat 5 Waktu" },
        { label: "Puasa", value: "Puasa" },
        { label: "Ustadz Yang Diikuti", value: "Ustadz Yang Diikuti" },
        { label: "Hafalan Al-Quran", value: "Hafalan Al-Quran" },
        { label: "Allah Berada dimana ?", value: "Allah Berada dimana ?" },
        {
          label: "Apakah Takdir sudah ditetapkan?",
          value: "Apakah Takdir sudah ditetapkan?"
        },
        {
          label: "Bolehkah melakukan demonstrasi?",
          value: "Bolehkah melakukan demonstrasi?"
        }
      ]
    };
  },
  components: {
    "mw-dropdown": Dropdown,
    "mw-datepicker": DatePicker
  },
  methods: {
    onSave() {
      const tempData = JSON.parse(JSON.stringify(this.formData));
      tempData.push(this.formAdd);
      this.formData = tempData;
      this.clearInput();
      this.$emit("onSave", { data: tempData, section: "prays" });
    },
    clearInput() {
      this.formAdd = {};
    }
  },
  beforeMount() {
    if (this.initData && this.initData.length > 0)
      this.formData = [...this.formData, ...this.initData];
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

