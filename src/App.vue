<template>
  <!-- в корне только компоненты и никаких конструкций для красоты и удобства, все комопненты отсюда в "@/components/main/" -->
  <main-popup/>

  <main-header/>
  <router-view/>
  <cookie-window/>
</template>

<script>
import MainHeader from '@/components/main/MainHeader.vue'
import CookieWindow from '@/components/main/CookieWindow.vue'
import MainPopup from '@/components/main/MainPopup.vue'

export default {
  components: {
    MainHeader,
    CookieWindow,
    MainPopup
  },
}
</script>

<style lang="scss">

* {
  margin: 0px;
  padding: 0px;
  font-family: var(--main-font);
}

@font-face {
  font-family: 'Helios';
  src: url('@/assets/fonts/helios.otf') format('otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Gilroy';
  src: url('@/assets/fonts/Gilroy.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

</style>
