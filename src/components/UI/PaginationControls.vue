<template>
  <div class="pagination-controls">
    <button 
      class="controls-dot"
      v-for="(page, index) in totalPages" 
      :key="index"
      @click="changePage(page)"
      :disabled="page === currentPage">
    </button>
  </div>
</template>

<script>
export default {
  name: "pagination-controls",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      this.$emit('page-change', page) // отправка выбранную страницу в родительский компонент
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-controls {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 20%;
    margin-top: 50px;

    .controls-dot {
        transition: background-color 0.3s ease;
        background: var(--border-color);
        cursor: not-allowed;
        border: none;
        height: 10px;
        width: 10px;
        border-radius: 50%;
    
        &:disabled {
            background: var(--orange-color);
            cursor: pointer;
        }
    }
}
</style>
