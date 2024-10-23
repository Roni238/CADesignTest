<template>
  <div class="call-list">
    <h2 class="call-list__title">
      <slot></slot>
    </h2>

    <ul class="call-list__items">
      <li class="call-list__item" v-for="(el, index) in array" :key="index">
        {{ el }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'call-list',
    props: {
        array: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.call-list {
  margin-top: 55px;
  color: var(--dark-color);

  &__title {
    font-size: var(--h2-size);
    font-weight: 400;
  }

  &__items {
    padding: 29px 0 0 23px;
    font-size: var(--p-size);
    font-weight: 400;
    line-height: 24px;
  }

  &__item {
    margin-bottom: 24px;
    position: relative;
    list-style: none;

    /* у элементов списка дефолтная точка заменена на квадрат */
    &::before {
      content: '';
      position: absolute;
      left: -24px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px; 
      height: 4px;
      background-color: var(--main-blue-color); 
    }
  }
}


@media (max-width: 768px) {
  .call-list {
  
    &__title {
      font-size: 24px;
    }
  
    &__items {
      padding: 29px 0 0 23px;
      font-size: var(--p-size);
      line-height: 24px;
    }
  
    &__item {
      margin-bottom: 24px;
      position: relative;
      list-style: none;
  
      /* у элементов списка дефолтная точка заменена на квадрат */
      &::before {
        content: '';
        position: absolute;
        left: -24px;
        top: 50%;
        transform: translateY(-50%);
        width: 4px; 
        height: 4px;
        background-color: var(--main-blue-color); 
      }
    }
  }
}


@media (max-width: 321px) {
  .call-list {
  
    &__title {
      font-size: 18px;
    }
  
    &__items {
      padding: 22px 0 0 18px;
      font-size: 12px;
      line-height: 20px;
    }
  
    &__item {
      margin-bottom: 24px;
      position: relative;
      list-style: none;
  
      /* у элементов списка дефолтная точка заменена на квадрат */
      &::before {
        content: '';
        position: absolute;
        left: -24px;
        top: 50%;
        transform: translateY(-50%);
        width: 4px; 
        height: 4px;
        background-color: var(--main-blue-color); 
      }
    }
  }
}
</style>
