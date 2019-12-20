<template>
    <div class="row">
        <div class="col-xl-12">
        <div class="kt-portlet">
            <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
                <h3 class="kt-portlet__head-title">
                Data Keluarga
                <small>Silahkan Isi dengan baik dan jujur, Allah maha melihat</small>
                </h3>
            </div>
            </div>
            <form class="kt-form kt-form--label-right form-family" @submit.prevent="onSave">
                <div class="form-group row">
                    <div class="col">
                        <label>Hubungan Kerabat</label>
                        <mw-dropdown :searchBarActive="false" :placeholder="'Pilih Hubungan'" :initData="familyList" v-model="formAdd['relation']" :customClass="'form-control-sm'" />
                    </div>
                    <div class="col">
                        <label>Pekerjaan</label>
                        <input type="text" class="form-control form-control-sm" v-model="formAdd['job']" placeholder="">
                    </div>
                    <div class="col-lg-2">
                        <label>Usia</label>
                        <input type="number" class="form-control form-control-sm" v-model="formAdd['age']" placeholder="">
                    </div>
                    <div class="col">
                        <label>Agama</label>
                        <input type="text" class="form-control form-control-sm" v-model="formAdd['religion']" placeholder="">
                    </div>
                    <div class="col">
                        <label>Pendidikan</label>
                        <input type="text" class="form-control form-control-sm" v-model="formAdd['education']" placeholder="">
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
                                    <img src="/metronic/themes/metronic/theme/default/demo4/dist/assets/media/users/100_4.jpg" alt="">   
                                </div>
                                <div class="kt-widget31__info">
                                    <a href="#" class="kt-widget31__username">
                                        {{obj.relation}}
                                    </a>
                                    <p class="kt-widget31__text">
                                        {{obj.job ? `Pekerjaan: ${obj.job}, ` : ''}}
                                        {{obj.education ? `Pendidikan: ${obj.education}, ` : ''}}
                                        {{obj.religion ? `Agama: ${obj.religion} ` : ''}}
                                    </p>							 		 
                                </div>					 
                            </div>
                        </div>
                        <!-- <div class="kt-widget31__item">
                            <div class="kt-widget31__content">
                                <div class="kt-widget31__pic">
                                    <img src="/metronic/themes/metronic/theme/default/demo4/dist/assets/media/users/100_4.jpg" alt="">   
                                </div>
                                <div class="kt-widget31__info">
                                    <a href="#" class="kt-widget31__username">
                                        Ibu
                                    </a>
                                    <p class="kt-widget31__text">
                                        Pekerjaan: Ibu Rumah Tangga, Pendidikan: SMA, Agama: Islam
                                    </p>							 		 
                                </div>					 
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import DashboardService from "~/service/dashboardService.js";
import ProfileService from '~/service/profileService';
import Dropdown from '~/components/Custom/dropdown';
import DatePicker from '~/components/Custom/datepicker';

export default {
  props: ['initData', 'initCities', 'initProvince'],
  data() {
    return {
      formData: [],
      formAdd: {},
      familyList: [{label: 'Ayah', value: 'Ayah'},
      {label: 'Ibu', value: 'Ibu'},
      {label: 'Kakak', value: 'Kakak'},
      {label: 'Adik', value: 'Adik'}]
    };
  },
  components: {
    'mw-dropdown': Dropdown,
    'mw-datepicker': DatePicker
  },
  methods: {
    onSave() {
        const tempData = JSON.parse(JSON.stringify(this.formData));
        tempData.push(this.formAdd);
        this.formData = tempData;
        this.clearInput();
        this.$emit('onSave', {data: tempData, section: 'families'});
    },
    clearInput() {
        this.formAdd = {};
    }
  },
  beforeMount() {
      if (this.initData && this.initData.length > 0) this.formData = [...this.formData, ...this.initData];
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

