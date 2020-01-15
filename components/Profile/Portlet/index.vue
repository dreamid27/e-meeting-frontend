<template>
  <div class="kt-portlet">
    <div class="kt-portlet__head">
      <div class="kt-portlet__head-label">
        <h3 class="kt-portlet__head-title">
            <slot name="title"></slot>
          <small>Silahkan Isi dengan baik dan jujur, Allah maha melihat</small>
        </h3>
      </div>
    </div>
    
    <div class="kt-portlet__body">
        <slot name="form"></slot>
        <slot name="body"></slot>
    </div>
    <div class="kt-portlet__foot">
      <div class="kt-form__actions">
        <div class="row">
          <div class="col-lg-12 col-xl-12">
            <nuxt-link
              to="/dashboard"
              class="btn btn-secondary"
              v-if="!isContinueSaving"
            >Kembali Ke Profile</nuxt-link>
            <nuxt-link
              to="/profile/pendidikan"
              class="btn btn-brand right"
              v-if="isContinueSaving"
            >Selanjutnya</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "~/components/Profile/Form";
export default {
  data() {
    return { isActivePopup: false };
  },
  components: {
    "mw-form": Form
  },
  computed: {
    isContinueSaving() {
      return this.$store.getters["profile/isContinueSaving"];
    }
  },
  methods: {
    togglePopup() {
      this.isActivePopup = this.isActivePopup != true;
    }
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />