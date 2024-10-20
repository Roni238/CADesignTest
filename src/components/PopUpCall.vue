<template>
    <div class="pop-up-call" v-if="!isLoading">
      <div class="vacancy__window">
        <h1 class="vacancy__window__title">
          {{ vacancy.title }}
        </h1>
        <p class="salary">
          {{ vacancy.salary }}
        </p>
  
        <orange-button>Откликнуться</orange-button>
  
        <div class="duties">
            <h2>Обязанности</h2>
          <ul>
            <li v-for="(duty, index) in vacancy.responsibilities" :key="index">
              {{ duty }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    <!-- Индикатор загрузки -->
    <div v-else>
      <p>Загрузка данных...</p>
    </div>
  </template>
  
  <script>
  import OrangeButton from "@/components/OrangeButton.vue";
  
  export default {
    name: "PopUpCall",
    components: {
      OrangeButton,
    },
    data() {
      return {
        isLoading: true, // статус загрузки
        vacancy: {}, // вакансия
      };
    },
    methods: {
      async fetchVacancyData() {
        try {
          const response = await fetch("/data/vacancyData.json");
          const data = await response.json();
          this.vacancy = data;
          this.isLoading = false;
        } catch (error) {
          console.error("Ошибка при загрузке данных:", error);
        }
      },
    },
    mounted() {
        // имитация загрузки данных
        this.fetchVacancyData();
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .pop-up-call {
    --background-color: #828282;
  
    z-index: 9;
    background-color: var(--background-color);
    position: fixed;
    inset: 0;
  
    .vacancy__window {
      width: 1145px;
      height: 1495px;
      padding: 104px 98px 147px 112px;
      background-color: var(--white-color);
      box-shadow: 0px 28px 62px 0px #00000012;
      margin: 161px auto;
  
      .vacancy__window__title {
        font-size: 36px;
        font-weight: 700;
        line-height: 41.83px;
      }
  
      .salary {
        font-size: 18px;
        font-weight: 400;
        line-height: 22.32px;
        margin: 38px 0px 47px 0px;
      }
    }
  }
  </style>
  