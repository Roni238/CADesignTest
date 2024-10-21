<template>
    <button class="orange-button">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "orange-button",
}
</script>
<style lang="scss" scoped>
    .orange-button{
        height: 64px;
        width: 247px;
        color: var(--white-color);
        background-color: var(--orange-color);
        text-align: center;
        border: none;
        font-size: var(--p-size);
        font-weight: 700;
        line-height: 18.59px;

    }
</style>