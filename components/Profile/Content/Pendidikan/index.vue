<template>
  <div class="row">
    <div class="col-xl-12">
      <mw-portlet isContinueSaving="isContinueSaving">
        <template v-slot:title>Pendidikan</template>
        <template v-slot:form>
          <mw-form @onTogglePopup="togglePopup" @onSubmit="onSave" :isActive="isActivePopup">
            <div class="col">
              <label>Jenis Pendidikan</label>
              <mw-dropdown
                :searchBarActive="false"
                :placeholder="'Pilih Pendidikan'"
                :initData="educationList"
                v-model="formAdd['education_level']"
                :customClass="'form-control-sm'"
              />
            </div>
            <div class="col">
              <label>Jurusan</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="formAdd['spesialis']"
                placeholder
              />
            </div>
            <div class="col">
              <label>Tahun Mulai</label>
              <input
                type="number"
                class="form-control form-control-sm"
                v-model="formAdd['start_year']"
                placeholder
              />
            </div>
            <div class="col">
              <label>Tahun Selesai</label>
              <input
                type="number"
                class="form-control form-control-sm"
                v-model="formAdd['end_year']"
                placeholder
              />
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
                  <div class="kt-widget31__pic">
                    <img
                      src="/metronic/themes/metronic/theme/default/demo4/dist/assets/media/users/100_4.jpg"
                      alt
                    />
                  </div>
                  <div class="kt-widget31__info">
                    <a href="#" class="kt-widget31__username">{{obj.education_level}}</a>
                    <p class="kt-widget31__text">
                      {{obj.spesialis ? `${obj.spesialis}, ` : ''}}
                      {{obj.start_year ? `${obj.start_year} ` : ''}}
                      {{obj.end_year ? `- ${obj.end_year} ` : ''}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </mw-portlet>
      <!-- <div class="kt-portlet">
            <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
                <h3 class="kt-portlet__head-title">
                Pendidikan
                <small>Silahkan Isi dengan baik dan jujur, Allah maha melihat</small>
                </h3>
            </div>
            </div>
            <transition name="slide-vertical">
                <form class="kt-form kt-form--label-right form-family" @submit.prevent="onSave" v-show="isActivePopup">
                    <div class="form-group row">
                        <div class="col">
                            <label>Jenis Pendidikan</label>
                            <mw-dropdown :searchBarActive="false" :placeholder="'Pilih Pendidikan'" :initData="educationList" v-model="formAdd['education_level']" :customClass="'form-control-sm'" />
                        </div>
                        <div class="col">
                            <label>Jurusan</label>
                            <input type="text" class="form-control form-control-sm" v-model="formAdd['spesialis']" placeholder="">
                        </div>
                        <div class="col-lg-2">
                            <label>Tahun Mulai</label>
                            <input type="number" class="form-control form-control-sm" v-model="formAdd['start_year']" placeholder="">
                        </div>
                        <div class="col">
                            <label>Tahun Selesai</label>
                            <input type="number" class="form-control form-control-sm" v-model="formAdd['end_year']" placeholder="">
                        </div>
                    </div>
                    <div class="kt-form__action">
                        <button type="submit" class="btn btn-sm btn-success">Simpan</button>&nbsp;
                    </div>
                        <button type="button" @click="togglePopup()" class="btn btn-brand btn-elevate btn-circle btn-icon btn-floating center-bottom sign-un" v-show="isActivePopup"><span class="flaticon2-up"></span></button>
                </form>
            </transition>
            <div class="kt-portlet__body">
                <button type="button" @click="togglePopup()"  class="btn btn-brand btn-elevate btn-circle btn-icon btn-floating" v-show="!isActivePopup"><span class="flaticon2-plus"></span></button>
                <div class="kt-section__body">
                    <div class="kt-widget31">
                        <div class="kt-widget31__item" v-for="(obj, idx) in formData" :key="idx">
                            <div class="kt-widget31__content">
                                <div class="kt-widget31__pic">
                                    <img src="/metronic/themes/metronic/theme/default/demo4/dist/assets/media/users/100_4.jpg" alt="">   
                                </div>
                                <div class="kt-widget31__info">
                                    <a href="#" class="kt-widget31__username">
                                        {{obj.education_level}}
                                    </a>
                                    <p class="kt-widget31__text">
                                        {{obj.spesialis ? `${obj.spesialis}, ` :  ''}}
                                        {{obj.start_year ? `${obj.start_year} ` :  ''}}
                                        {{obj.end_year ? `- ${obj.end_year} ` :  ''}}
                                    </p>							 		 
                                </div>					 
                            </div>				
                        </div>
                    </div>
                </div>
            </div>
      </div>-->
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
      educationList: [
        { label: "SD", value: "SD" },
        { label: "SMP", value: "SMP" },
        { label: "SMA", value: "SMA" },
        { label: "D1", value: "D1" },
        { label: "D2", value: "D2" },
        { label: "D3", value: "D3" },
        { label: "S1", value: "S1" },
        { label: "S2", value: "S2" },
        { label: "S3", value: "S3" }
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
      this.$emit("onSave", { data: tempData, section: "educations" });
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

