<template>
    <div class="send-resume">
      <input type="checkbox" class="checkbox">

      <p> 
        Я принимаю условия 
        <router-link
          class="conditions__link"
          :to="'/conditions-for-the-transfer-of-information'"
        >
          передачи информации
        </router-link>
      </p>
      <orange-button class="send_button" @click="sendResume">Отправить</orange-button>
    </div>
</template>
<script>
import OrangeButton from "@/components/UI/OrangeButton.vue";

export default {    
    name: 'send-resume',
    methods: {
        sendResume(){
            this.$store.dispatch("vacancyModule/sendResume")
        }
    },
    components: {
        OrangeButton
    },
}
</script>
<style lang="scss" scoped>
.send-resume { 
    grid-area: send-resume;
    border: 1px solid #F2F2F2;
    padding: 38px 34px 38px 28px;
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    .checkbox{
        height: 24px;
        width: 24px;
        color: var(--white-color);
        background-color: var(--orange-color);
        margin-right: 19px;
    }
    .send_button{
        margin-left: auto;
        padding: 22px 62px 23px 63px;
        

        &--enable{
            background-color: #C3C8C8;
        }
    }

    .conditions__link {
        color: var(--blue-color);
        text-decoration: none;
    }
}
</style>