<template>
    <article class="popup-send-message">
        <close-popup-button/>
        <h1 class="title">Сообщение успешно отправлено</h1>
        <p class="description">Наш менеджер свяжется с вами в ближайшее время</p>
    </article>
</template>
<script>
import ClosePopupButton from "@/components/UI/ClosePopupButton.vue";

export default {
    name: 'popup-sends-message',
    components: {
        ClosePopupButton
    },
}
</script>
<style lang="scss" scoped>
.popup-send-message{
    width: 100%;
    max-width: 1145px;
    box-sizing: border-box;
    padding: 120px 263px 112px 280px;
    background-color: var(--white-color);
    box-shadow: 0px 28px 62px 0px #00000012;
    margin: 170px auto;
    position: relative;

    .title{
        text-align: center;
        margin-bottom: 46px;
    }

    .description{
        font-size: var(--p-size-big);
        font-weight: 400;
        line-height: 22.32px;
        text-align: center;
    }
}
</style>