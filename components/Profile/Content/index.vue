<template>
  <div class="kt-grid__item kt-grid__item--fluid kt-app__content">
    <mw-informasi-personal v-if="activeSection == 'informasi-personal'" :initData="initData" :initCities="initCities" :initProvince="initProvince" @onSave="onSave" />
    <mw-gambaran-fisik v-if="activeSection == 'gambaran-fisik'" :initData="initData['physical_image']" @onSave="onSave" />
    <mw-gambaran-diri v-if="activeSection === 'gambaran-diri'" :initData="initData['self_image']" @onSave="onSave" />
    <mw-data-keluarga v-if="activeSection === 'data-keluarga'" :initData="initData['families']" @onSave="onSave" />
    <mw-pendidikan v-if="activeSection === 'pendidikan'" :initData="initData['educations']" @onSave="onSave" />
    <mw-pengalaman v-if="activeSection === 'pengalaman'" :initData="initData['experiences']" @onSave="onSave" />
    <mw-ibadah v-if="activeSection === 'ibadah'" :initData="initData['prays']" @onSave="onSave" />
  </div>
</template>

<script>
import DashboardService from "~/service/dashboardService.js";
import ProfileService from '~/service/profileService';
import InformasiPersonal from '~/components/Profile/Content/InformasiPersonal'; 
import GambaranFisik from '~/components/Profile/Content/GambaranFisik';
import GambaranDiri from '~/components/Profile/Content/GambaranDiri';
import DataKeluarga from '~/components/Profile/Content/DataKeluarga';
import Pendidikan from '~/components/Profile/Content/Pendidikan';
import Pengalaman from '~/components/Profile/Content/Pengalaman';
import Ibadah from '~/components/Profile/Content/Ibadah';

export default {
  props: ['initData', 'initCities', 'initProvince', 'activeSection'],
  components: {
    'mw-informasi-personal': InformasiPersonal,
    'mw-gambaran-fisik': GambaranFisik,
    'mw-gambaran-diri': GambaranDiri,
    'mw-data-keluarga': DataKeluarga,
    'mw-pendidikan': Pendidikan,
    'mw-pengalaman': Pengalaman,
    'mw-ibadah': Ibadah
  },
  methods: {
    onSave(obj) {   
      const tempData = Object.assign({}, this.initData);
      if (obj.section)  tempData[obj.section] = obj.data;
      else tempData = Object.assign({}, obj.data);
      this.$store.dispatch('profile/setMyProfile', tempData);
    }
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

