<template>
    <div class="row">
        <div class="col-xl-12">
        <div class="kt-portlet">
            <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
                <h3 class="kt-portlet__head-title">
                Gambaran Diri
                <small>Silahkan Isi dengan baik dan jujur, Allah maha melihat</small>
                </h3>
            </div>
            </div>
            <form class="kt-form kt-form--label-right" @submit.prevent="onSave"> 
            <div class="kt-portlet__body">
                <div class="kt-section__body">
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Moto</label>
                        <div class="col-lg-9 col-xl-6">
                            <textarea class="form-control" id="moto" rows="3" v-model="formData['moto']" ></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Target Hidup</label>
                        <div class="col-lg-9 col-xl-6">
                            <textarea class="form-control" id="life_target" rows="3" v-model="formData['life_target']" ></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Penghargaan yang pernah di terima</label>
                        <div class="col-lg-9 col-xl-6">
                            <textarea class="form-control" id="appreciation" rows="3" v-model="formData['appreciation']" ></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Hobi</label>
                        <div class="col-lg-9 col-xl-6">
                            <textarea class="form-control" id="hobi" rows="3" v-model="formData['hoby']" ></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Kegiatan Waktu Luang</label>
                        <div class="col-lg-9 col-xl-6">
                            <textarea class="form-control" id="activities_in_freetime" rows="3" v-model="formData['activities_in_freetime']" ></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Hal yang disukai</label>
                        <div class="col-lg-9 col-xl-6">
                            <textarea class="form-control" id="things_like" rows="3" v-model="formData['things_like']" ></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Sifat Positif</label>
                        <div class="col-lg-9 col-xl-6">
                            <textarea class="form-control" id="positive_nature" rows="3" v-model="formData['positive_nature']" ></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Sifat Negatif</label>
                        <div class="col-lg-9 col-xl-6">
                            <textarea class="form-control" id="negative_nature" rows="3" v-model="formData['negative_nature']" ></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Pendapat Tentang Poligami</label>
                        <div class="col-lg-9 col-xl-6">
                            <textarea class="form-control" id="opinion_poligami" rows="3" v-model="formData['opinion_poligami']" ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kt-portlet__foot">
                <div class="kt-form__actions">
                <div class="row">
                    <div class="col-lg-3 col-xl-3"></div>
                    <div class="col-lg-9 col-xl-9">
                    <button type="submit" class="btn btn-success">Submit</button>&nbsp;
                    <button type="reset" class="btn btn-secondary">Cancel</button>
                    <button type="submit" class="btn btn-brand">Selanjutnya</button>
                    </div>
                </div>
                </div>
            </div>
            </form>
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
      formData: {
        gender: 'ikhwan',
        manhaj: 'nosalaf'
      },
      bentukFisikList: [{label: 'Sangat Kurus', value: 'Sangat Kurus'},
      {label: 'Kurus', value: 'Kurus'},
      {label: 'Atletis', value: 'Atletis'},
      {label: 'Normal', value: 'Normal'},
      {label: 'Chubby', value: 'Chubby'}]
    };
  },
  components: {
    'mw-dropdown': Dropdown,
    'mw-datepicker': DatePicker
  },
  methods: {
    onSave() {
        const tempData = Object.assign({}, this.formData);
        this.$emit('onSave', {data: tempData, section: 'self_image'});
    }
  },
  beforeMount() {
    this.formData = {...this.formData, ...this.initDatax};
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

