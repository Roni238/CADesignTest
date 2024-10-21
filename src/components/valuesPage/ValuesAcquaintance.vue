<template>
    <div class="acquaintance">
        <img src="@/assets/acquaintance_office.jpg" alt="office" class="acquaintance__image__office">
        <img src="@/assets/acquaintance_people.png" alt="people" class="acquaintance__image__people">

        <div class="acquaintance--background"/>

        <div class="acquaintance__content">
          <h1 class="acquaintance__title"> 
            Энергия твоего роста! – <br>
            заряжаем твою карьеру
          </h1>
          
          <button class="acquaintance__button" @click="this.$store.commit('popupModule/setActivePopup', 'popup-call')">
            Cтать частью команды
          </button>
        </div>
      </div>
</template>
<script>
export default {
    name:'values-acquaintance'
}
</script>
<style lang="scss" scoped>

.acquaintance {
  height: 448px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: var(--main-blue-color);

  .acquaintance--background {
    background: var(--main-blue-color);
    clip-path: polygon(0% 0%, 50% 0%, 61% 50%, 50% 100%, 0% 100%);
    height: 100%;
    width: 100%;
    z-index: 2;
    top: 0px;
    position: absolute;
  }

  .acquaintance__image__office {
    z-index: 1;
    right: -24px;
    position: absolute;
  }

  .acquaintance__image__people {
    z-index: 3;
    position: absolute;
    bottom: 0px;
    left: 45%;
  }
  
  .acquaintance__content {
    width: 1194px;
    position: sticky;
    margin: auto;
    z-index: 4;
    top: 20%;

    .acquaintance__title {
      margin-bottom: 85px;
      font-size: var(--h1-size);
      font-weight: 700;
      line-height: 41px;
      text-align: left;
      color: var(--white-color);
    }

    .acquaintance__button {
      width: 254px;
      height: 64px;
      border: none;
      background-color: var(--orange-color);
      font-size: var(--p-size);
      font-weight: 700;
      line-height: 18px;
      color: var(--white-color);

      svg {
        height: auto;
        width: auto;
      }
    }
  }
}

</style>