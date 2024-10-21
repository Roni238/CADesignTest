<template>
    <section class="popup--backgroung" v-if="getActivePopup">
        <component :is="getActivePopup"/>
    </section>
</template>
<script>
import {mapGetters} from 'vuex'
import PopupCall from '@/components/popups/PopupCall.vue'
import PopupCallForm from '@/components/popups/PopupCallForm.vue'

export default {
    components:{
        PopupCall, PopupCallForm
    },
    computed:{
        ...mapGetters({
            getActivePopup:'popupModule/getActivePopup',
        }),
    },
    name: "main-popup"
}
</script>

<style lang="scss" scoped>
    .popup--backgroung{
        z-index: 10;
        background-color: var(--gray-dark-color);
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        overflow-y: auto;
    }
</style>