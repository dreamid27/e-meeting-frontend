<template>
  <header>
    <div class="wrapper">
      <div class="left__section">
        <nuxt-link to="/profile/informasi-personal" class="profile-action">
          <img src="~assets/imgs/icons/account.png" />
        </nuxt-link>
      </div>
      <div class="right__section">
        <h1>Beranda</h1>
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
    mixins: [clickaway ],
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