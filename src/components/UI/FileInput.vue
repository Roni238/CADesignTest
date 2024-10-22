<template>
  <div class="file-input-container">
    <input class="file-input" type="file" 
      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      @change="onFileSelected"
    >

    <label class="file-input-label" :class="{ 'is-loaded': selectedFile?.name }">
      {{ selectedFile ? abbreviationsFileName(selectedFile?.name) : 'Загрузить резюме' }}
    </label>

    <svg-icon 
      v-if="selectedFile" 
      :icon="'trashcan-icon'" 
      :w="10" 
      :h="11" 
      class="reset_button" 
      @click.stop="clearFile"
    />
  </div>
</template>
<script>
import { abbreviationsMixin } from '@/mixins/abbreviationsMixin';
import SvgIcon from "@/components/UI/SvgIcon.vue";

export default {
  name: 'file-input',
  components: {
    SvgIcon
  },
  mixins: [abbreviationsMixin],
  data(){
    return {
      selectedFile:null,
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    clearFile() {
      this.selectedFile = null;
    }
  }
}
</script>

<style lang="scss" scoped>
.file-input-container {
  height: 70px;
  border-bottom: 1px solid #242627;
  background: none;
  font-size: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 262px;
  box-sizing: border-box;

  .file-input {
    opacity: 0;
    position: absolute;
    inset: 0;
    z-index: 2;
  }

  .file-input-label {
    color: var(--blue-color);
    font-size: 15px;
    transition: color 0.3s ease;
    width: 100%;
    padding: 0px 15px 0px 10px;
    text-align: center;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .reset_button{
    position: absolute;
    right: 15px;
    z-index: 3;
  }

  .is-loaded {
    color: var(--dark-color); 
    text-align: start;
  }
}
</style>