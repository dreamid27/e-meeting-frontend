<template>
  <div>
    <Header />
    <nuxt />
    <!-- <Footer ></Footer> -->
  </div>
</template>

<script>
import Header from '~/components/Layout/Header/index.vue'
import Footer from '~/components/Layout/Footer/index.vue'
import axios from 'axios';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" src="./default.scss" />

