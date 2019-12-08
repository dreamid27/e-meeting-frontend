<template>
  <div
    class="kt-header-menu-wrapper kt-grid__item kt-grid__item--fluid"
    id="kt_header_menu_wrapper"
  >
    <div id="kt_header_menu" class="kt-header-menu kt-header-menu-mobile">
      <ul class="kt-menu__nav">
        <template v-for="(masterMenu, index) in menuItem">
          <li            
            :key="index"
            class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel"
            :class="{'kt-menu__item--open kt-menu__item--here': $route.path === masterMenu.slug }"
          >
            <nuxt-link class="kt-menu__link kt-menu__toggle" :to="masterMenu.slug ? masterMenu.slug : false" :title="masterMenu.name">
              <span class="kt-menu__link-text">{{masterMenu.name}}</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </nuxt-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { menuList } from "~/config/menu";

export default {
  data() {
    return {
      isOpen: false,
      menuItem: []
    };
  },
  methods: {},
  beforeMount() {
    this.menuItem = menuList;
    console.log(this.$route.path);
  }
};
</script>

<style lang="scss" scoped src="./index.scss" />
