<template>
    <input class="input-modal">


</template>
<script>
export default {
    name: 'input-modal'
}
</script>
<style lang="scss" scoped>
    .input-modal {
        width: 100%;
        height: 70px;
        font-size: var(--p-size);
        font-weight: 400;
        line-height: 19.84px;
        color:var(--gray-dark-color);
        border: none;
        background-color: #F2F2F2;
        padding: 25px 28px;
        box-sizing: border-box;

        &:focus{
            outline: none;
            border: var(--border-color) 1px solid;
            background-color: var(--white-color);
            color: #000;
        }
    }
    
</style>