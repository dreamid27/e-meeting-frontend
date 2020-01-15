<template>
    <div class="row">
        <div class="col-xl-12">
        <div class="kt-portlet">
            <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
                <h3 class="kt-portlet__head-title">
                Gambaran Fisik
                <small>Silahkan Isi dengan baik dan jujur, Allah maha melihat</small>
                </h3>
            </div>
            </div>
            <form class="kt-form kt-form--label-right" @submit.prevent="onSave"> 
            <div class="kt-portlet__body">
                <div class="kt-section__body">
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Bentuk Fisik</label>
                        <div class="col-lg-9 col-xl-6">
                            <mw-dropdown :searchBarActive="false" :placeholder="'Pilih Bentuk Fisik'" :initData="bentukFisikList" v-model="formData['bentuk_fisik']" />
                        <!-- <input class="form-control" type="text" v-model="formData['place_of_birth']" id="place_of_birth"/> -->
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Warna Kulit</label>
                        <div class="col-lg-9 col-xl-6">
                            <mw-dropdown :searchBarActive="false" :placeholder="'Pilih Warna Kulit'" :initData="skinColorList" v-model="formData['skin_color']" />
                        <!-- <input class="form-control" type="text" v-model="formData['place_of_birth']" id="place_of_birth"/> -->
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Warna Mata</label>
                        <div class="col-lg-9 col-xl-6">
                            <mw-dropdown :searchBarActive="false" :placeholder="'Pilih Warna Mata'" :initData="colorEyeList" v-model="formData['eye_color']" />
                        <!-- <input class="form-control" type="text" v-model="formData['place_of_birth']" id="place_of_birth"/> -->
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Warna Rambut</label>
                        <div class="col-lg-9 col-xl-6">
                            <mw-dropdown :searchBarActive="false" :placeholder="'Pilih Warna Rambut'" :initData="colorHairList" v-model="formData['hair_color']" />
                        <!-- <input class="form-control" type="text" v-model="formData['place_of_birth']" id="place_of_birth"/> -->
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">Tipe Rambut</label>
                        <div class="col-lg-9 col-xl-6">
                            <mw-dropdown :searchBarActive="false" :placeholder="'Pilih Tipe Rambut'" :initData="typeHairList" v-model="formData['hair_type']" />
                        <!-- <input class="form-control" type="text" v-model="formData['place_of_birth']" id="place_of_birth"/> -->
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">
                            Tinggi Badan (cm)
                        </label>
                        <div class="col-lg-9 col-xl-6">
                            <input class="form-control" type="number" v-model="formData['height']" id="height" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">
                            Berat Badan (kg)
                        </label>
                        <div class="col-lg-9 col-xl-6">
                            <input class="form-control" type="number" v-model="formData['weight']" id="weight" />
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">
                            Olahraga yang digemari
                        </label>
                        <div class="col-lg-9 col-xl-6">
                        <input class="form-control" type="text" v-model="formData['favorite_sport']" id="hobby" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">
                            Riwayat Penyakit (Jika Ada)
                        </label>
                        <div class="col-lg-9 col-xl-6">
                        <input class="form-control" type="text" v-model="formData['history_medical']" id="history_medical" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">
                            Ciri Khas (Jika Ada)
                        </label>
                        <div class="col-lg-9 col-xl-6">
                        <input class="form-control" type="text" v-model="formData['ciri_khas']" id="ciri_khas" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-xl-3 col-lg-3 col-form-label">
                            Cacat Fisik (Jika Ada)
                        </label>
                        <div class="col-lg-9 col-xl-6">
                        <input class="form-control" type="text" v-model="formData['cacat_fisik']" id="cacat_fisik" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="kt-portlet__foot">
                <div class="kt-form__actions">
                <div class="row">
                    <div class="col-lg-3 col-xl-3"></div>
                    <div class="col-lg-9 col-xl-6">
                    <template v-if="!isContinueSaving">
                      <button type="submit" class="btn btn-success">Simpan</button>&nbsp;
                      <a href="/dashboard" class="btn btn-secondary">Kembali Ke Home</a>
                    </template>
                    <button type="submit" class="btn btn-brand right"  v-if="isContinueSaving">Selanjutnya</button>
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
  props: ['initData'],
  data() {
    return {
        formData: {},
      bentukFisikList: [{label: 'Sangat Kurus', value: 'Sangat Kurus'},
      {label: 'Kurus', value: 'Kurus'},
      {label: 'Atletis', value: 'Atletis'},
      {label: 'Normal', value: 'Normal'},
      {label: 'Chubby', value: 'Chubby'}],
      skinColorList: [
          {label: 'Putih', value: 'Putih'},
          {label: 'Putih Kemerahan', value: 'Putih Kemerahan'},
          {label: 'Putih Kekuningan', value: 'Putih Kekuningan'},
          {label: 'Putih Kecoklatan', value: 'Putih Kecoklatan'},
          {label: 'Coklat Sawo Matang', value: 'Coklat Sawo Matang'},
          {label: 'Coklat Kehitaman', value: 'Coklat Kehitaman'},
          {label: 'Hitam', value: 'Hitam'}],
      typeHairList: [
          {label: 'Lurus', value: 'Lurus'},
          {label: 'Ikal', value: 'Ikal'},
          {label: 'Keriting', value: 'Keriting'},
          {label: 'Keriting Kribo', value: 'Keriting Kribo'}],
      colorHairList: [
          {label: 'Coklat', value: 'Coklat'},
          {label: 'Hitam', value: 'Hitam'},
          {label: 'Merah', value: 'Merah'},
          {label: 'Pirang', value: 'Pirang'}],
      colorEyeList: [
          {label: 'Hitam', value: 'Hitam'},
          {label: 'Biru', value: 'Biru'},
          {label: 'Coklat', value: 'Coklat'},
          {label: 'Hijau', value: 'Hijau'}]
    };
  },
  components: {
    'mw-dropdown': Dropdown,
    'mw-datepicker': DatePicker
  },
  computed: {
    isContinueSaving() {
      return this.$store.getters['profile/isContinueSaving'];
    }
  },
  methods: {
    onSave() {
        const tempData = Object.assign({}, this.formData);
        this.$emit('onSave', {data: tempData, section: 'physical_image'});
        if (this.isContinueSaving) this.$router.push({ path: '/profile/gambaran-diri', query: { iscontinue: '1' } });
    }
  },
  beforeMount() {
    this.formData = {...this.formData, ...this.initData};
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

