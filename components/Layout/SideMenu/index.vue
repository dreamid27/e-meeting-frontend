<template>
  <aside id="main-sidebar" class="sidebar-menu">
    <div class="sidebar__container">
      <ul class="side-nav">
        <template v-for="(masterMenu, index) in menuItem">
          <li class="side-nav__item side-nav__header" :key="index" v-if="masterMenu.groupName">
            <span class="side-nav__text">{{masterMenu.groupName}}</span>
          </li>
          <li
            class="side-nav__item"
            v-for="(menu, idxMenu) in masterMenu.menuItem"
            :key="idxMenu"
            @click="toggleMenu($event)"
          >
            <nuxt-link
              :to="menu.slug ? menu.slug : false"
              :class="`side-nav__link ${menu.submenu ? `side-nav__arrow`  : '' }`"
              :title="menu.name"
            >
              <i :class="`icon ${menu.iconName}`"></i>
              <span class="side-nav__text">{{ menu.name }}</span>
            </nuxt-link>

            <!-- Sub-menu -->
            <ul class="side-nav__sub-menu" style="display: none;" v-if="menu.submenu">
              <li
                class="side-nav__item"
                v-for="(subMenu, idxSubMenu) in menu.subMenuItem"
                :key="idxSubMenu"
              >
                <nuxt-link
                  :to="subMenu.slug ? subMenu.slug : false"
                  class="side-nav__link"
                  :title="subMenu.name"
                >
                  <i :class="`icon ${subMenu.iconName ? subMenu.iconName : ''}`"></i>
                  <span class="side-nav__text">{{ subMenu.name }}</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </div>
  </aside>
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
  methods: {
    toggleMenu(e) {
      let parentEl = e.currentTarget;
      parentEl.classList.toggle("open");
      let subMenuEl = parentEl.getElementsByClassName("side-nav__sub-menu");
      if (subMenuEl[0] && subMenuEl[0].style.display == "block") {
        subMenuEl[0].style.display = "none";
      } else {
        subMenuEl[0].style.display = "block";
      }
    }
  },
  beforeMount() {
    this.menuItem = menuList;
  },
};
</script>

<style lang="scss" scoped src="./index.scss" />
