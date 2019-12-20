<template>
    <div class="modal modal-open">
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <div class="modal-header">
                Ajukan Ta'aruf
            </div>
            <div class="modal-body">
                <div class="form-group">
                      <label>Untuk mengajukan Ta'aruf terhadap Akhwat 1234, ketik <b>Bismillah</b></label>
                    <input type="text" class="form-control" v-model="confirmationVal">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click.prevent="closePopup"> Cancel </button>
                <button type="button" class="btn btn-bold btn-label-brand" @click="confirmPopup" :class="{'disable': this.confirmationVal.toLowerCase() !== 'bismillah'}"> Ajukan Taaruf </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['initData'],
    data() {
        return {
            'confirmationVal': ''
        }
    },
    methods: {
        closePopup() {
            this.$emit('onClose');
        },
        confirmPopup() {
            if (this.confirmationVal.toLowerCase() === 'bismillah') this.$emit('onSubmit', this.initData);
        }
    }
};
</script>
<style lang="scss" scoped src="./index.scss" />

