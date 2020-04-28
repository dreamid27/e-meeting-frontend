<template>
    <div class="form__group field">
        <input type="text" autocomplete="off" v-model="eValue" class="form__field" :placeholder="placeholder" :name="name" @input="changeValue()"  />
        <label :for="name" class="form__label">{{ placeholder }}</label>
    </div>
</template>



<script>
export default {
    props: ['placeholder', 'name', 'value'],
    data() {
        return {
            eValue: this.value
        }
    },
    methods: {
        changeValue() {
            this.$emit('input', this.eValue);
        }
    }
};
</script>

<style lang="scss"  src="./index.scss" />
