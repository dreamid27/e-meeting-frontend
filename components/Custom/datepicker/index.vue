<template>
  <div class="mw-datepicker">
      <date-picker @change="changeValue" :placeholder="placeholder" format="DD-MM-YYYY" v-model="eValue" valueType="format"></date-picker>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/id';

export default {
    props: ['placeholder', 'value'],
    data() {
        return {
            eValue: this.value
        }
    },
    components: {
        DatePicker
    },
    methods: {
        changeValue() {
            this.$emit('input', this.eValue);
        }
    }
};
</script>

<style lang="scss"  src="./index.scss" />
