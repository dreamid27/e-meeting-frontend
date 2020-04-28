<template>
    <div class="personal-information">
      <div class="personal-information__container wrapper">
        <form class="" @submit.prevent="onSave"> 
          <mw-input v-model="formData['id_card']" :placeholder="'Nomor KTP'" :name="'id_card'" />
          <mw-input v-model="formData['no_hp']" :placeholder="'Nomor HP/WA'" :name="'no_hp'" />
          <mw-input v-model="formData['first_name']" :placeholder="'Nama Depan'" :name="'first_name'" />
          <mw-input v-model="formData['last_name']" :placeholder="'Nama Belakang'" :name="'last_name'" />
          <mw-input v-model="formData['company']" :placeholder="'Tempat Bekerja'" :name="'company'" />
          <mw-input v-model="formData['suku']" :placeholder="'suku'" :name="'suku'" />

          <div class="action-container">
            <button type="submit" class="button-rounded">Simpan</button>&nbsp;
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import DashboardService from "~/service/dashboardService.js";
import ProfileService from '~/service/profileService';
import Dropdown from '~/components/Custom/dropdown';
import DatePicker from '~/components/Custom/datepicker';
import MWInput from '~/components/Custom/mw-input';

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
    // 'mw-dropdown': Dropdown,
    // 'mw-datepicker': DatePicker,
    'mw-input': MWInput
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

