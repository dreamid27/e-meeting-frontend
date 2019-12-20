<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="kt-portlet">
        <div class="kt-portlet__head">
          <div class="kt-portlet__head-label">
            <h3 class="kt-portlet__head-title">
              Pengalaman
              <small>Silahkan Isi dengan baik dan jujur, Allah maha melihat</small>
            </h3>
          </div>
        </div>
        <form class="kt-form kt-form--label-right form-family" @submit.prevent="onSave">
          <div class="form-group row">
            <div class="col">
              <label>Jenis Pengalaman</label>
              <mw-dropdown
                :searchBarActive="false"
                :placeholder="'Pilih Pengalaman'"
                :initData="experienceList"
                v-model="formAdd['experience_type']"
                :customClass="'form-control-sm'"
              />
            </div>
            <div class="col">
              <label>Posisi</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="formAdd['position']"
                placeholder
              />
            </div>
            <div class="col">
              <label>Perusahaan/Organisasi</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="formAdd['company']"
                placeholder
              />
            </div>
            <div class="col-lg-2">
              <label>Tahun Mulai</label>
              <input
                type="number"
                class="form-control form-control-sm"
                v-model="formAdd['start_date']"
                placeholder
              />
            </div>
            <div class="col">
              <label>Tahun Selesai</label>
              <input
                type="number"
                class="form-control form-control-sm"
                v-model="formAdd['end_date']"
                placeholder
              />
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
                  <div class="kt-widget31__pic">
                    <img
                      src="/metronic/themes/metronic/theme/default/demo4/dist/assets/media/users/100_4.jpg"
                      alt
                    />
                  </div>
                  <div class="kt-widget31__info">
                    <div href="#" class="kt-widget31__username">{{obj.company}}</div>
                    <p class="kt-widget31__text">
                      {{obj.position ? `${obj.position}, ` : ''}}
                      {{obj.start_date ? `${obj.start_date}` : ''}}
                      {{obj.end_date ? ` - ${obj.end_date}` : ''}}
                    </p>
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
      experienceList: [
        { label: "Kerja", value: "Kerja" },
        { label: "Organisasi", value: "Organisasi" }
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
      this.$emit("onSave", { data: tempData, section: "experiences" });
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

