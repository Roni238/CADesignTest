<template>
 <article class="call-form">
  <h2 class="call-form__title">Отклик на вакансию</h2>

  <form action="" class="call-form__form">
    <input-modal type="text" class="form-input" placeholder="Желаемая вакансия *" required/>
    <input-modal type="text" class="form-input" placeholder="Фамилия, имя и отчество *" required/>

    <phone-input/>
    <input-modal type="email" class="form-input" placeholder="E-mail"/>

    <input-modal type="text" class="form-input" placeholder="Образование *" required/>
    <input-modal type="text" class="form-input" placeholder="Адрес места жительства *" required/>

    <input-modal type="date" placeholder="Дата рождения"/>
    <input-modal
      type="file"
      id="docpicker"
      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
      placeholder="Загрузить резюме"/>
 

    <textarea placeholder="Комментарий" autocorrect="on" maxlength="255"></textarea>
  </form>
    
 </article>
</template>

<script>
import OrangeButton from "@/components/UI/OrangeButton.vue";
import InputModal from "@/components/UI/InputModal.vue";
import PhoneInput from "@/components/UI/PhoneInput.vue";

export default {
  name: "popup-call-form",
  components: {
    OrangeButton,
    InputModal,
    PhoneInput
  },
  data() {
    return {
    };
  },
  methods: {
   
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
.call-form {
    width: 100%;
    max-width: 1145px;
    box-sizing: border-box;
    padding: 104px 253px 65px 180px;
    background-color: var(--white-color);
    box-shadow: 0px 28px 62px 0px #00000012;
    margin: 170px auto;
    position: relative;

    .call-form__title {
      font-size: var(--h1-size);
      font-weight: 700;
      line-height: 41.83px;
      margin-bottom: 57px;
    }

    .call-form__form {
      display: grid;
      gap: 32px;

      

      textarea {
        resize: none;
      }
    }
}
</style>