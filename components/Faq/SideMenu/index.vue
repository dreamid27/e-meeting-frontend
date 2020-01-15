<template>
  <ul class="kt-nav kt-nav--bold kt-nav--md-space kt-nav--v4">
    <template v-for="(obj, i) in initData">
      <li class="kt-nav__item" :key="i" :class="{'active' : obj.slug == activeMenu }">
        <a class="kt-nav__link" :href="`#${obj.slug}`">
          <span class="kt-nav__link-text">{{obj.type_question}} </span>
        </a>
      </li>
    </template>
    <!-- <li class="kt-nav__item active">
      <a
        class="kt-nav__link"
        href="#syariat"
      >
        <span class="kt-nav__link-text">Syariat</span>
      </a>
    </li>-->
  </ul>
</template>

<script>
export default {
  props: ["activeMenu", "initData"]
};
</script>

<style lang="scss" scoped src="./index.scss" />