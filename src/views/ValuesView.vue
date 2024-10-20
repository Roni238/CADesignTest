<template>
  <div class="values-page">
      <values-acquaintance/>
      <values-advantage/>
      <important-people/>
  </div>
</template>

<script>
import ValuesAdvantage from '@/components/valuesPage/ValuesAdvantage.vue'
import ValuesAcquaintance from '@/components/valuesPage/ValuesAcquaintance.vue'
import ImportantPeople from '@/components/valuesPage/ImportantPeople.vue'

export default {
  name: 'HomeView',
  components: {
    ValuesAdvantage,
    ValuesAcquaintance,
    ImportantPeople
  }
}
</script>

<style lang="scss" scoped>

.values-page {
  padding-top: 34px;
}

</style>