<template>
    <div class="row">
      <div class="col-xl-12">
        <div class="kt-portlet">
          <div class="kt-portlet__head">
            <div class="kt-portlet__head-label">
              <h3 class="kt-portlet__head-title">
                Informasi Personal
                <small>Silahkan Isi dengan baik dan jujur, Allah maha melihat</small>
              </h3>
            </div>
          </div>
          <form class="kt-form kt-form--label-right" @submit.prevent="onSave"> 
            <div class="kt-portlet__body">
              <div class="kt-section kt-section--first">
                <div class="kt-section__body">
                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">
                      Nomor KTP
                    </label>
                    <div class="col-lg-9 col-xl-6">
                      <input class="form-control" type="number" v-model="formData['id_card']" id="id_card" />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">
                      Nama Depan
                    </label>
                    <div class="col-lg-9 col-xl-6">
                      <input class="form-control" type="text" v-model="formData['first_name']" id="first_name" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">
                      Nama Belakang
                    </label>
                    <div class="col-lg-9 col-xl-6">
                      <input class="form-control" type="text" v-model="formData['last_name']" id="last_name" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">
                      Tempat Bekerja
                    </label>
                    <div class="col-lg-9 col-xl-6">
                      <input class="form-control" type="text" v-model="formData['company']" id="company" />
                    </div>
                  </div>

                  <!-- <div class="row">
                    <label class="col-xl-3"></label>
                    <div class="col-lg-9 col-xl-6">
                      <h3 class="kt-section__title kt-section__title-sm">Contact Info:</h3>
                    </div>
                  </div> -->

                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">Jenis Kelamin</label>
                    <div class="col-lg-9 col-xl-6">
                      <div class="kt-radio-inline">
                        <label class="kt-radio">
                          <input type="radio" name="gender" value="ikhwan" v-model="formData['gender']"> Ikhwan / Laki2
                          <span></span>
                        </label>
                        <label class="kt-radio">
                          <input type="radio" name="gender" value="akhwat" v-model="formData['gender']"> Akhwat / Perempuan
                          <span></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">Manhaj</label>
                    <div class="col-lg-9 col-xl-6">
                      <div class="kt-radio-list">
                        <label class="kt-radio">
                          <input type="radio" name="manhaj" value="salaf" v-model="formData['manhaj']" > Salaf
                          <span></span>
                        </label>
                        <label class="kt-radio">
                          <input type="radio" name="manhaj" value="unsalaf" v-model="formData['manhaj']"> Baru Mengenal Salaf
                          <span></span>
                        </label>
                        <label class="kt-radio">
                          <input type="radio" name="manhaj" value="nosalaf" v-model="formData['manhaj']"> Bukan Manhaj Salaf
                          <span></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">Status Pernikahan</label>
                    <div class="col-lg-9 col-xl-6">
                      <div class="kt-radio-list">
                        <label class="kt-radio">
                          <input type="radio" name="status_marriage" value="0" v-model="formData['status_marriage']">Single
                          <span></span>
                        </label>
                        <label class="kt-radio">
                          <input type="radio" name="status_marriage" value="1" v-model="formData['status_marriage']">Menikah
                          <span></span>
                        </label>
                        <label class="kt-radio">
                          <input type="radio" name="status_marriage" value="2" v-model="formData['status_marriage']">Duda/Janda Cerai Hidup
                          <span></span>
                        </label>
                        <label class="kt-radio">
                          <input type="radio" name="status_marriage" value="3" v-model="formData['status_marriage']">Duda/Janda Cerai Mati
                          <span></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">Tanggal Lahir</label>
                    <div class="col-lg-9 col-xl-6">
                      <mw-datepicker v-model="formData['born_date']" :placeholder="'Pilih Tanggal'"  valueType="format"></mw-datepicker>
                      <!-- <div class="input-group date">
                          <input type="text" class="form-control" readonly="" placeholder="Pilih Tanggal" id="kt_datepicker_2">
                          <div class="input-group-append">
                            <span class="input-group-text">
                              <i class="la la-calendar-check-o"></i>
                            </span>
                          </div>
                      </div> -->
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">Tempat Lahir</label>
                    <div class="col-lg-9 col-xl-6">
                      <mw-dropdown :placeholder="'Pilih Kota'" :initData="initCities" v-model="formData['born_city']" />
                      <!-- <input class="form-control" type="text" v-model="formData['place_of_birth']" id="place_of_birth"/> -->
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">
                      Anak Ke
                    </label>
                    <div class="col-lg-9 col-xl-6">
                      <input class="form-control" type="number" v-model="formData['anak_ke']" id="anak_ke" />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">Kota Domisili</label>
                    <div class="col-lg-9 col-xl-6">
                      <mw-dropdown :placeholder="'Pilih Kota'" :initData="initCities" v-model="formData['domisili_city']"  />
                      <!-- <input class="form-control" type="text" v-model="formData['place_of_birth']" id="place_of_birth"/> -->
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">Kota Asal</label>
                    <div class="col-lg-9 col-xl-6">
                      <mw-dropdown :placeholder="'Pilih Kota'" :initData="initCities" v-model="formData['from_city']"  />
                      <!-- <input class="form-control" type="text" v-model="formData['place_of_birth']" id="place_of_birth"/> -->
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">
                      Suku
                    </label>
                    <div class="col-lg-9 col-xl-6">
                      <input class="form-control" type="text" v-model="formData['suku']" id="suku" />
                    </div>
                  </div>
                   <div class="form-group row">
                    <label class="col-xl-3 col-lg-3 col-form-label">Ijin Menikah</label>
                    <div class="col-lg-9 col-xl-6">
                      <div class="kt-radio-list">
                        <label class="kt-radio">
                          <input type="radio" name="marriage_permission" value="0" v-model="formData['marriage_permission']">Khusus Poligami
                          <span></span>
                        </label>
                        <label class="kt-radio">
                          <input type="radio" name="marriage_permission" value="1" v-model="formData['marriage_permission']">Sudah
                          <span></span>
                        </label>
                        <label class="kt-radio">
                          <input type="radio" name="marriage_permission" value="2" v-model="formData['marriage_permission']">Belum
                          <span></span>
                        </label>
                      </div>
                    </div>
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
  props: ['initData', 'initCities', 'initProvince'],
  data() {
    return {
      formData: {
        gender: 'ikhwan',
        manhaj: 'nosalaf'
      }
    };
  },
  components: {
    'mw-dropdown': Dropdown,
    'mw-datepicker': DatePicker
  },
  methods: {
    async onSave() {
      try { 
        const profileService = new ProfileService(this.$axios, this.$auth);
        await profileService.updateProfile(this.formData);
        if (this.isContinueSaving) this.$router.push({ path: '/profile/gambaran-fisik', query: { iscontinue: '1' } });
      } catch (error) {
        console.error(error);
      }
    }
  },
  computed: {
    isContinueSaving() {
      return this.$store.getters['profile/isContinueSaving'];
    }
  },
  beforeMount() {
    this.formData = {...this.formData, ...this.initData};
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

