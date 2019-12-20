<template>
  <div class="mw-dropdown" v-on-clickaway="closeDropdown">
    <input
      class="form-control mw-input" 
      :class="customClass"
      type="text"
      readonly=""
      :placeholder="placeholder"
      :value="selectedLabel"
      @focus="isShowDropdown = !isShowDropdown"
    />
    <div class="mw-dropdown-container" v-show="isShowDropdown" >
        <div class="mw-dropdown-container__search" v-if="showSearchBar">
          <input class="form-control" type="text" @keyup="findList($event)" />
        </div>
        <div class="mw-dropdown-container__inner">
            <ul class="">
                <li v-for="(item, idx) in tempInitData" :key="idx"><a @click="selectedItem(item)">{{ item.label }}</a></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
    props: ['initData', 'value', 'placeholder', 'searchBarActive', 'customClass'],
    mixins: [clickaway],
    data() {
        return {
            selectedValue: '',
            isShowDropdown: false,
            tempInitData: this.initData,
            filterValue: ''        }
    },

    computed: {
      selectedLabel() {
        const itSelected = this.initData && this.initData.find(x => x.value === this.value);
        if (itSelected) return itSelected.label;
        else return '';
      },
      showSearchBar() {
        if (this.searchBarActive != undefined) {
          return this.searchBarActive;
        }
        return true;
      }
    },
    methods: {
      closeDropdown() {
        this.isShowDropdown = false;
      },
      selectedItem(val) {
        this.$emit('input', val.value);
        this.closeDropdown();
      },
      findList(e) {
        const inValue = e.target.value || '';
        if (inValue) {
          const resFilter = this.initData.filter(x => x.label.toLowerCase().includes(inValue.toLowerCase()));
          this.tempInitData = resFilter;
        } else this.tempInitData = this.initData;
     
      }
    }
};
</script>

<style lang="scss" scoped src="./index.scss" />
