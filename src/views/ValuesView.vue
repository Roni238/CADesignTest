<template>
  <main class="values-page">
      <values-acquaintance/>
      <values-advantage/>
      <important-people/>
  </main>
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

@media (max-width: 768px) {
  .values-page {
    padding: 0px;
  }
}
</style>