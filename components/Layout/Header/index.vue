<template>
  <header>
    <div id="kt_header_mobile" class="kt-header-mobile kt-header-mobile--fixed">
      <div class="kt-header-mobile__logo">
        <a href="demo4/index.html">
          <img alt="Logo" src="~assets/media/logos/logo-4-sm.png" />
        </a>
      </div>
      <div class="kt-header-mobile__toolbar">
        <button class="kt-header-mobile__toolbar-toggler" id="kt_header_mobile_toggler">
          <span></span>
        </button>
        <button
          class="kt-header-mobile__toolbar-topbar-toggler"
          id="kt_header_mobile_topbar_toggler"
        >
          <i class="flaticon-more-1"></i>
        </button>
      </div>
    </div>

    <div class="kt-grid kt-grid--hor kt-grid--root">
      <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
        <div
          class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper"
          id="kt_wrapper"
        >
          <!-- begin:: Header -->
          <div id="kt_header" class="kt-header kt-header--fixed" data-ktheader-minimize="on">
            <div class="kt-container">
              <!-- begin:: Brand -->
              <div class="kt-header__brand kt-grid__item" id="kt_header_brand">
                <a class="kt-header__brand-logo" href="demo4/index.html">
                  <img
                    alt="Logo"
                    src="~assets/media/logos/logo-4.png"
                    class="kt-header__brand-logo-default"
                  />
                  <img
                    alt="Logo"
                    src="~assets/media/logos/logo-4-sm.png"
                    class="kt-header__brand-logo-sticky"
                  />
                </a>
              </div>
              <!-- end:: Brand -->
              <!-- begin: Header Menu -->
              <button class="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn">
                <i class="la la-close"></i>
              </button>
              <!-- end: Header Menu -->
              <mw-mainmenu />
                <!-- begin:: Header Topbar -->
                <div class="kt-header__topbar kt-grid__item">
                    <mw-notification :isActiveMenu="selectedMenu" @onSelectedMenu="setActiveMenu" @onHideMenu="hideAllActiveMenu" />
                    <mw-usermenu :isActiveMenu="selectedMenu" @onSelectedMenu="setActiveMenu" @onHideMenu="hideAllActiveMenu" />
                </div>
                <!-- end:: Header Topbar -->
              
            </div>
          </div>
          <!-- end:: Header -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>

import { mixin as clickaway } from 'vue-clickaway';
import Notification from '~/components/Layout/Notification';
import UserMenu from '~/components/Layout/UserMenu';
import MainMenu from '~/components/Layout/MainMenu';


export default {
    mixins: [ clickaway ],
    data() {
        return {
            selectedMenu: ''
        };
    },
    components: {
        'mw-notification': Notification,
        'mw-usermenu': UserMenu,
        'mw-mainmenu': MainMenu
    },
    methods: {
        hideAllActiveMenu() {
            this.selectedMenu = ''
        },
        setActiveMenu(menuName) {
            this.selectedMenu = menuName;
        }
    }
}

</script>

<style lang="scss" scoped src="./index.scss" />