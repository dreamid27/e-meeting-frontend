<template>
<div class="menu-item">
    <nuxt-link :to="initData.link" class="menu-item__container">
        <div class="menu-item__icon">
              <img src="~/assets/imgs/icons/send.png" />
        </div>
        <div class="menu-item__label">
            <div class="menu-item__title">
                {{initData.title}}
            </div>
            <div class="menu-item__desc">
                {{initData.desc}}
            </div>
        </div>
    </nuxt-link>
</div>
</template>

<script>
export default {
    props: ['initData']
};
</script>
<style lang="scss" scoped src="./style.scss" />


