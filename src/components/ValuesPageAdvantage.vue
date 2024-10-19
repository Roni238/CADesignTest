<template>
    <div class="values-page__advantage">
        <div class="values-page__buttons">
            <button class="button-group__button" v-for="button in buttons" :key="button.icon">
                <svg :width="button.width" :height="button.height">
                    <use :xlink:href="`/icons.svg#${button.icon}`"></use>
                </svg>
                <p>{{ button.title }}</p>
            </button> 
        </div>
    </div>
</template>


<script>
export default {
    name:"values-page-advantage",
    data() {
        return {
            buttons:[
                { title: 'Развитие', icon: 'development-icon', width: 66, height: 62 },
                { title: 'Обучение', icon: 'training-icon', width: 74, height: 74 },
                { title: 'Ответственность', icon: 'responsibility-icon', width: 68, height: 67 },
                { title: 'Динамика', icon: 'dynamics-icon', width: 95, height: 59 },
                { title: 'Комфорт', icon: 'comfort-icon', width: 72, height: 72 },
                { title: 'Надежность', icon: 'reliability-icon', width: 54, height: 69 }
            ]
        }
    },
}
</script>


<style lang="scss" scoped>
.values-page__advantage {
    display: flex;
    justify-content: center;
    margin-top: 76px;

    .values-page__buttons {
      display: grid;
      grid-template-columns: repeat(3, 398px);
      gap: 1px;
      padding: 1px;
      width: auto;
      background: var(--stroke-color);

      .button-group__button {
        max-width: 398px;
        width: 100%;
        height: 377px;
        border: none;
        background: var(--white-color);
        font-size: 20px;
        font-weight: 400;
        line-height: 24.8px;
        text-align: center;

        svg {
          margin-bottom: 64px;
        }
      }
    }
  }
</style>