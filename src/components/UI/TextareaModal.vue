<template>
    <textarea class="textarea-modal"></textarea>
</template>
<script>
export default {
    name: 'textarea-modal'
}
</script>
<style lang="scss"  scoped>
.textarea-modal{
    background-color: #F2F2F2;
    height: 100%;
    width: 100%;
    border: none;
    padding: 25px 28px;
    font-size: 16px;
    resize: none;
    color: #828282;
    box-sizing: border-box;
    
    &:focus {
        outline: none;
        border: var(--border-color) 1px solid;
        background-color: var(--white-color);
        color: #000;
      }
}
    
</style>