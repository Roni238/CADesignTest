<template>
    <button class="orange__button" @click="sendResume">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "orange-button",
    props:{
        style:{
            color:"#FFF",
            width:70,
            height:70,
            fontSize:16,
            backgroundColor:"#E9862A"
        }
    }
}
</script>
<style lang="scss" scoped>
    .orange__button{
        height: 64px;
        width: 247px;
        color: var(--white-color);
        background-color: var(--orange-color);
        text-align: center;
        border: none;
        font-size: 16px;
        font-weight: 700;
        line-height: 18.59px;

    }
</style>