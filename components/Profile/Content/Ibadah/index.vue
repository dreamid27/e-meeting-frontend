<template>
  <div class="row">
    <div class="col-xl-12">
      <mw-portlet isContinueSaving="isContinueSaving">
        <template v-slot:title>Ibadah</template>

        <template v-slot:form>
          <mw-form @onTogglePopup="togglePopup" @onSubmit="onSave" :isActive="isActivePopup">
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
          </mw-form>
        </template>

        <template v-slot:body>
         <transition name="page">
            <button
              type="button"
              @click="togglePopup()"
              class="btn btn-brand btn-elevate btn-circle btn-icon btn-floating"
              v-show="!isActivePopup"
            >
              <span class="flaticon2-plus"></span>
            </button>
          </transition>
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
        </template>
      </mw-portlet>
    </div>
  </div>
</template>

<script>
import DashboardService from "~/service/dashboardService.js";
import ProfileService from "~/service/profileService";
import Dropdown from "~/components/Custom/dropdown";
import DatePicker from "~/components/Custom/datepicker";
import Portlet from "~/components/Profile/Portlet";
import Form from "~/components/Profile/Form";

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
      ],
      isActivePopup: false
    };
  },
  components: {
    "mw-dropdown": Dropdown,
    "mw-datepicker": DatePicker,
    "mw-form": Form,
    "mw-portlet": Portlet
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
    },
    togglePopup() {
      this.isActivePopup = this.isActivePopup != true;
    }
  },
  beforeMount() {
    if (this.initData && this.initData.length > 0)
      this.formData = [...this.formData, ...this.initData];
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

