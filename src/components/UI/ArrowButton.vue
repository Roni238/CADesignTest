<template>
    <button class="arrow-button">
      <svg-icon :icon="'arrow-icon'" :w="6" :h="10" class="arrow-button__icon" />
    </button>
</template>

<script>
import SvgIcon from "@/components/UI/SvgIcon.vue";

export default {
  name: "arrow-button",
  components: {
    SvgIcon,
  },
};
</script>
  
<style lang="scss" scoped>
.arrow-button {
  height: 94px;
  width: 52px;

  &__icon {
    fill: inherit; // наследование цвета для стилизации 
  }
}
</style>

