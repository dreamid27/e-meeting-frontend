<template>
  <div class="loading-container">
    <div class="boxes">
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import AuthService from "~/service/authentication";
import Loading from "~/components/Loading";
export default {
  beforeDestroy() {
    document.body.style.overflow = "";
  },
  beforeMount() {
    document.body.style.overflow = "hidden";
  }
};
</script>

<style lang="scss" scoped src="./index.scss" />
