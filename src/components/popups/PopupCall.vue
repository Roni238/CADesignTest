<template>
  <article class="vacancy">
    <div v-if="getVacancy">
      <header class="vacancy-header">
        <h1 class="vacancy-header__title">
          {{ getVacancy.title }}
        </h1>
        <p class="vacancy-header__salary">
          {{ getVacancy.salary }}
        </p>
        <orange-button class="vacancy-header__button"
          @click="this.$store.commit('popupModule/setActivePopup', 'popup-call-form')"
        >Откликнуться</orange-button>
      </header>

      <main class="vacancy-main">
        <call-list class="vacancy-main__list vacancy-main__list--duties" :array="getVacancy.responsibilities">
          Обязанности
        </call-list>
        <call-list class="vacancy-main__list vacancy-main__list--requirements" :array="getVacancy.requirements">
          Требования
        </call-list>
        <call-list class="vacancy-main__list vacancy-main__list--prerequisites" :array="getVacancy.prerequisites">
          Условия
        </call-list>
        <p class="vacancy-main__date">{{ formatVacancyDate }}</p>
        <orange-button class="vacancy-main__button"
          @click="this.$store.commit('popupModule/setActivePopup', 'popup-call-form')"
        >Откликнуться</orange-button>
      </main>

      <!-- Стрелки навигации с динамическим классом для левой стрелки -->
      <arrow-button 
        class="vacancy__arrow vacancy__arrow--left" 
        :class="{'vacancy__arrow--active-left': skip !== 0}"
        @click="changeVacancy(-1)"
      ></arrow-button>
      
      <arrow-button class="vacancy__arrow vacancy__arrow--right" @click="changeVacancy(1)"></arrow-button>
      
      <orange-button class="vacancy__close-button" @click="this.$store.commit('popupModule/setActivePopup', '')">✕</orange-button>
    </div>

    <div class="vacancy__loading" v-else>
      <p>Загрузка</p>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import OrangeButton from "@/components/UI/OrangeButton.vue";
import CallList from "@/components/UI/CallList.vue";
import ArrowButton from "@/components/UI/ArrowButton.vue";

export default {
  name: "popup-call",
  components: {
    OrangeButton,
    CallList,
    ArrowButton
  },
  data() {
    return {
      skip: 0 // переменная для контроля позиции
    };
  },
  computed:{
    ...mapGetters({
      getVacancy:'vacancyModule/getVacancy',
    }),
    // форматирование даты
    formatVacancyDate() {
      const dateString = this.getVacancy.data;
      if (!dateString) return '';
      const [day, month, year] = dateString.split('.');
      const months = [
         "января", "февраля", "марта", "апреля", "мая", "июня",
         "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];
      return `Вакансия добавлена ${parseInt(day)} ${months[parseInt(month) - 1]} 20${year}`;
    },
  },
  methods: {
    changeVacancy(direction){
      if (this.skip + direction >= 0) {
        this.skip += direction;
        this.$store.dispatch('vacancyModule/fetchVacancyData', this.skip);
      }
    }
  },
  mounted() {
    this.$store.dispatch('vacancyModule/fetchVacancyData');
  }
};
</script>

<style lang="scss" scoped>
.vacancy {
  --button-margin: -34px;
  width: 100%;
  max-width: 1145px;
  box-sizing: border-box;
  padding: 104px 98px 147px 112px;
  background-color: var(--white-color);
  box-shadow: 0px 28px 62px 0px #00000012;
  margin: 170px auto;
  position: relative;

  .vacancy-header {
    margin-bottom: 38px;
  
    &__title {
      font-size: var(--h1-size);
      font-weight: 700;
      line-height: 41.83px;
    }
  
    &__salary {
      font-size: var(--p-size-big);
      font-weight: 400;
      line-height: 22.32px;
      margin-bottom: 47px;
    }
  
    &__button {
      background-color: var(--orange-color);
    }
  }
  
  .vacancy-main {
    &__list {
      margin-top: 56px;
    }
  
    &__date {
      margin-top: 56px;
      font-size: var(--p-size);
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      color: var(--gray-dark-color);
    }
  
    &__button {
      margin-top: 56px;
    }
  }

  &__loading {
    p {
      text-align: center;
      color: var(--orange-color);
    }
  }

  &__arrow {
    position: absolute;
    top: 50%;
    fill: #EBEBEB;

    &--left {
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: none;
      left: var(--button-margin);
      transform: translateY(-50%) translateX(-100%);
    }

    &--right {
      border: none;
      background: var(--dark-color);
      right: var(--button-margin);
      transform: translateY(-50%) translateX(100%) rotate(180deg);
    }

    //если в лево можно листать skip >0 то сделаем ее визуально активной
    &--active-left {
      transition: background-color 0.3s ease;
      background: var(--dark-color);
      border: none;
    }
  }

  &__close-button {
    width: 70px;
    height: 70px;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    transform: translateX(100%);
  }
}
</style>
