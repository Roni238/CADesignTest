<template>
  <header-vue/>
  <router-view/>
</template>

<script>
import HeaderVue from '@/components/HeaderVue.vue'

export default {
  components: {
    HeaderVue
  }
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


</style>
