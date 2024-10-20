<template>
  <pop-up-call v-if="getOpenCallPopup"/>

  <header-vue/>
  <router-view/>
  <cookie-window/>
</template>

<script>
import {mapGetters} from 'vuex'
import HeaderVue from '@/components/HeaderVue.vue'
import CookieWindow from '@/components/CookieWindow.vue'
import PopUpCall from '@/components/PopUpCall.vue'

export default {
  components: {
    HeaderVue,
    CookieWindow,
    PopUpCall
  },
  computed:{
    ...mapGetters({
      getOpenCallPopup:'getOpenCallPopup',
    }),
  },
}
</script>

<style lang="scss">

* {
  margin: 0px;
  padding: 0px;
  font-family: 'Helios', sans-serif;
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
