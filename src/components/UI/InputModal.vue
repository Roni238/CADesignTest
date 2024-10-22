<template>
    <div class="input-container">
        <input class="input-modal" 
            :placeholder="isFocused ? placeholder : title" 
            :required="required"
            @focus="isFocused = true"
            @blur="isFocused = false"
            :type="type"
            :accept="accept"
        >
        
        <label
            class="input-label"
            :class="{ 'input-label--is-focused': isFocused }"
        >
            {{ title }}
        </label>
    </div>
</template>
<script>
export default {
    name: 'input-modal',
    props: {
        placeholder:{
            type: String
        },
        required:{
            type: Boolean,
            default: true
        },
        title: {
            type: String
        },
        type:{
          type : String,
          default: 'text'
        },
        accept:{
            type : String
        }
    },
    data() {
        return {
            isFocused:false
        }
    }
}
</script>
<style lang="scss" scoped>
.input-container{
    position: relative;
    width: 100%;

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
            padding: 35px 28px 15px 28px;
        }
    }

    .input-label {
        position: absolute;
        top: 50%;
        left: 28px;
        transform: translateY(-50%);
        transition: all 0.3s ease;
        color: var(--gray-color);
        pointer-events: none; /* чтобы клик по лейблу не перехватывал фокус инпута */
        font-size: 16px;
        opacity: 0;

        &--is-focused {
            top: 22px;
            left: 24px;
            font-size: 13px;
            color: var(--gray-dark-color);
            opacity: 1;
        }
    }
}
    

    
</style>