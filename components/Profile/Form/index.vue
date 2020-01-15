<template>
<transition name="slide-vertical">
    <form
    class="kt-form kt-form--label-right form-family"
    @submit.prevent="save()"
    v-show="isActive"
    >
    <div class="form-group row">
        <slot></slot>
    </div>
    <div class="kt-form__action">
        <button type="submit" class="btn btn-sm btn-success">Simpan</button>&nbsp;
    </div>
    <button
        type="button"
        @click="togglePopup()"
        class="btn btn-brand btn-sm btn-elevate btn-circle btn-icon btn-floating center-bottom sign-un"
        v-show="isActive"
    >
        <span class="flaticon2-up"></span>
    </button>
    </form>
</transition>
</template>

<script>
export default {
  props: ["isActive"],
  methods: {
      togglePopup() {
          this.$emit('onTogglePopup');
      },
      save() {
          this.$emit('onSubmit');
      }
  }
};
</script>
<style lang="scss" scoped src="./index.scss" />

