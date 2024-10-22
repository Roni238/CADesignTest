<template>
 <article class="call-form">
  <close-popup-button/>
  <h2 class="call-form__title">Отклик на вакансию</h2>

  <form action="" class="call-form__form" @submit.prevent>
    <div class="vacancy">
      <input-modal class="form-input" type="text" placeholder="лакировщик глобусов" title="Желаемая вакансия *"/>
    </div>

    <div class="name">
      <input-modal class="form-input" type="text" placeholder="Константинопольский Вениамин Валерье |" title="Фамилия, имя и отчество *"/>
    </div>

    <div class="phone">
      <phone-input placeholder="Мобильный телефон*"/>
    </div>

    <div class="email">
      <input-modal class="form-input" type="email" placeholder="ivanov@pochta.ru" title="E-mail"/>
    </div>

    <div class="education">
      <input-modal class="form-input" type="text" placeholder="укажите специализацию" title="Образование *"/>
    </div>

    <div class="address">
      <input-modal class="form-input" type="text" title="Адрес места жительства *"/>
    </div>

    <div class="birth-and_upload-resume">
      <input-modal class="date-of-birth" type="date" :title="'Дата рождения'" :required="false"/>
      <file-input class="upload-resume"/>
    </div>

    <div class="comment">
      <textarea-modal placeholder="Комментарий"/>
    </div>

    <send-resume/>
  </form>
    
  
 </article>
</template>

<script>
import OrangeButton from "@/components/UI/OrangeButton.vue";
import InputModal from "@/components/UI/InputModal.vue";
import PhoneInput from "@/components/UI/PhoneInput.vue";
import FileInput from "@/components/UI/FileInput.vue";
import TextareaModal from "@/components/UI/TextareaModal.vue";
import SendResume from "@/components/UI/SendResume.vue";
import ClosePopupButton from "@/components/UI/ClosePopupButton.vue";

export default {
  name: "popup-call-form",
  components: {
    OrangeButton,
    InputModal,
    PhoneInput,
    FileInput,
    TextareaModal,
    SendResume,
    ClosePopupButton
  }
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
      margin-bottom: 57px;
    }

    .call-form__form {
      display: grid; 
      grid-template-columns: auto auto; 
      grid-template-rows: 70px 70px 70px 70px 70px 70px 153px 140px; 
      gap: 32px 5px; 
      grid-template-areas: 
        "vacancy vacancy"
        "name name"
        "phone email"
        "education education"
        "address address"
        "birth-and_upload-resume birth-and_upload-resume"
        "comment comment"
        "send-resume send-resume"; 

      .vacancy { grid-area: vacancy; }
      .name { grid-area: name; }
      .phone { grid-area: phone; }
      .email { grid-area: email; }
      .education { grid-area: education; }
      .address { grid-area: address; }
      .birth-and_upload-resume{
        grid-area: birth-and_upload-resume;
        display: flex;

        .date-of-birth { 
          width: 266px;
        }
        .upload-resume { 
          margin-left: 29px;
        }
      }
      
      .comment { 
        grid-area: comment;
      }
    }
}
</style>