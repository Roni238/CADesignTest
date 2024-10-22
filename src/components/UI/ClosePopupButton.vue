<template>
    <orange-button class="close-button" @click="closePopup()">✕</orange-button>
</template>
<script>
import OrangeButton from "@/components/UI/OrangeButton.vue";
import { popupMixin } from '@/mixins/popupMixin';

export default {
    name: 'close-popup-button',
    components: {
        OrangeButton
    },
    mixins: [popupMixin],
}
</script>
<style lang="scss" scoped>
.close-button {
    width: 70px;
    height: 70px;
    padding: 0px;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    transform: translateX(100%);
}
</style>