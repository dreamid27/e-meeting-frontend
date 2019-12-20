<template>
  <!--begin: User bar -->
  <div class="kt-header__topbar-item kt-header__topbar-item--user dropdown" 
    :class="{'show': isActiveMenu == 'user'}" 
    @click="setSelectedMenu('user')"
>
    <div class="kt-header__topbar-wrapper">
      <span class="kt-header__topbar-welcome">Assalamualaikum,</span>
      <span class="kt-header__topbar-username">{{userData.firstName || 'Akhi'}}</span>

      <span class="kt-header__topbar-icon">
        <b>{{initialName}}</b>
      </span>
      <img alt="Pic" src="~assets/media/users/300_21.jpg" class="kt-hidden" />
    </div>
    <div
      class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl show"
      v-if="isActiveMenu == 'user'"
      v-on-clickaway="hideAllActiveMenu"
    >
      <!--begin: Head -->
      <div
        class="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x"
        :style="{backgroundImage: `url(${require('~/assets/media/misc/bg-1.jpg')})`}"
      >
        <div class="kt-user-card__avatar">
          <img class="kt-hidden" alt="Pic" src="~assets/media/users/300_25.jpg" />
          <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) -->
          <span class="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">M</span>
        </div>
        <div class="kt-user-card__name">{{userData.fullName || 'Akhi'}}</div>
        <div class="kt-user-card__badge">
          <span class="btn btn-success btn-sm btn-bold btn-font-md">{{userData.inRelation ? 'Ta\'aruf' : 'Ikthiar'}}</span>
        </div>
      </div>
      <!--end: Head -->

      <!--begin: Navigation -->
      <div class="kt-notification">
        <nuxt-link
          to="/profile"
          class="kt-notification__item"
        >
          <div class="kt-notification__item-icon">
            <i class="flaticon2-calendar-3 kt-font-success"></i>
          </div>
          <div class="kt-notification__item-details">
            <div class="kt-notification__item-title kt-font-bold">My Profile</div>
            <div class="kt-notification__item-time">Account settings and more</div>
          </div>
        </nuxt-link>
        <a href="demo4/custom/apps/user/profile-3.html" class="kt-notification__item">
          <div class="kt-notification__item-icon">
            <i class="flaticon2-mail kt-font-warning"></i>
          </div>
          <div class="kt-notification__item-details">
            <div class="kt-notification__item-title kt-font-bold">My Messages</div>
            <div class="kt-notification__item-time">Inbox and tasks</div>
          </div>
        </a>
        <nuxt-link to="/dashboard/taaruf/request" class="kt-notification__item">
          <div class="kt-notification__item-icon">
            <i class="flaticon2-rocket-1 kt-font-danger"></i>
          </div>
          <div class="kt-notification__item-details">
            <div class="kt-notification__item-title kt-font-bold">My Activities</div>
            <div class="kt-notification__item-time">Logs and notifications</div>
          </div>
        </nuxt-link>
        <div class="kt-notification__custom kt-space-between">
          <a
            href="demo4/custom/user/login-v2.html"
            target="_blank"
            class="btn btn-label btn-label-brand btn-sm btn-bold"
          >Sign Out</a>

          <a
            href="demo4/custom/user/login-v2.html"
            target="_blank"
            class="btn btn-clean btn-sm btn-bold"
          >@mawaddah_idn</a>
        </div>
      </div>
      <!--end: Navigation -->
    </div>
  </div>
  <!--end: User bar -->
</template>

<script>
import { menuList } from "~/config/menu";
import { mixin as clickaway } from "vue-clickaway";

export default {
  props: ["isActiveMenu"],
  mixins: [clickaway],
  computed: {
    userData() {
      return this.$store.getters['profile/getProfile'];
    },
    initialName() {
      return this.userData.firstName && this.userData.firstName[0] || 'a';
    }
  },
  methods: {
    hideAllActiveMenu() {
      this.$emit("onHideMenu");
    },
    setSelectedMenu(menuName) {
      this.$emit("onSelectedMenu", menuName);
    }
  }
};
</script>

<style lang="scss" scoped src="./index.scss" />
