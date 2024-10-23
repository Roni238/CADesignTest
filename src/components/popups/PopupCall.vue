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
          @click="openPopup('popup-call-form')"
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

        <p class="vacancy-main__date"> Вакансия добавлена {{ formatDate(this.getVacancy.date) }}</p>

        <orange-button class="vacancy-main__button" @click="openPopup('popup-call-form')">Откликнуться</orange-button>
      </main>


      <!-- стрелки навигации и кнопка закрыть -->
      <arrow-button class="vacancy__arrow vacancy__arrow--left" :class="{'vacancy__arrow--active-left': skip !== 0}" @click="changeVacancy(-1)"/>
      <arrow-button class="vacancy__arrow vacancy__arrow--right" @click="changeVacancy(1)"/>
      <close-popup-button/>
    </div>

    <div class="vacancy__loading" v-else>
      <p>Загрузка</p>
    </div>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import { popupMixin } from '@/mixins/popupMixin';
import { dateMixin } from '@/mixins/dateMixin';
import OrangeButton from "@/components/UI/OrangeButton.vue";
import CallList from "@/components/UI/CallList.vue";
import ArrowButton from "@/components/UI/ArrowButton.vue";
import ClosePopupButton from "@/components/UI/ClosePopupButton.vue";

export default {
  name: "popup-call",
  components: {
    OrangeButton,
    CallList,
    ArrowButton,
    ClosePopupButton
  },
  data() {
    return {
      skip: 0 // переменная для загрузки по индексу
    }
  },
  mixins: [popupMixin, dateMixin],
  computed:{
    ...mapGetters({
      getVacancy:'vacancyModule/getVacancy',
    })
  },
  methods: {
    changeVacancy(direction){
      if (this.skip + direction >= 0) {
        this.skip += direction
        this.$store.dispatch('vacancyModule/fetchVacancyData', this.skip)
      }
    }
  },
  mounted() {
    this.$store.dispatch('vacancyModule/fetchVacancyData')
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
      margin-bottom: 38px;
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

      &--prerequisites{
        //стилизация первого элемента с классом .call-list__item в блоке условий
        ::v-deep .call-list__item:first-child {
          background-color: #E9862A2B;
          display: inline-block;
          padding: 1px 8px;
          
        }
      }
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
}



@media (max-width: 768px) {
  .vacancy {
    padding: 128px 40px 51px 40px;
    margin: 0px;

    .vacancy-header {
      margin-bottom: 29px;
    
      &__title {
        margin-bottom: 54px;
        font-size: 32px;
      }
    
      &__salary {
        font-size: 18px;
        margin-bottom: 47px;
      }
    }

    .vacancy-main {
    
      &__date {
        margin-top: 56px;
        font-size: var(--p-size);
        line-height: 24px;
      }
    
      &__button {
        margin-top: 56px;
      }
    }
  }
}



@media (max-width: 320px) {
  .vacancy {
    padding: 80px 26px 52px 20px;
    margin: 0px;

    .vacancy-header {
    
      &__title {
        margin-bottom: 23px;
        font-size: 18px;
      }
      &__salary {
        font-size: 12px;
        margin-bottom: 29px;
      }
      &__button {
        display: none;
      }
    }

    .vacancy-main {
    
      &__date {
        margin-top: 21px;
        font-size: 11px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: var(--gray-dark-color);
      }
    
      &__button {
        margin-top: 40px;
      }
    }
  }
}
</style>