<template>
  <input
    type="tel"
    class="phone-input"
    placeholder="Мобильный телефон*"
    required
    v-model="phone"
    @input="formatPhone"
  />
</template>

<script>
export default {
  data() {
    return {
      phone: '+7 ('
    };
  },
  methods: {
    formatPhone() {
      let cleaned = this.phone.replace(/\D+/g, '') // Очищаем всё, кроме цифр
      if (cleaned.startsWith('7')) {
        cleaned = cleaned.substring(1) // Убираем первую 7, если она есть
      }
      
      const part1 = cleaned.substring(0, 3)
      const part2 = cleaned.substring(3, 6)
      const part3 = cleaned.substring(6, 8)
      const part4 = cleaned.substring(8, 10)
      
      // форматированный номер
      let formatted = '+7 (';
      if (part1) formatted += part1;
      if (part2) formatted += `) ${part2}`
      if (part3) formatted += `-${part3}`
      if (part4) formatted += `-${part4}`

      this.phone = formatted;
    }
  },
  name: 'phone-input'
}
</script>

<style lang="scss" scoped>
    .phone-input {
        width: 100%;
        height: 70px;
        font-size: var(--p-size);
        font-weight: 400;
        line-height: 19.84px;
        color:var(--gray-dark-color);
        border: none;
        background-color: #F2F2F2;
        padding: 25px 28px;
        box-sizing: border-box;

        &:focus{
            outline: none;
            border: var(--border-color) 1px solid;
            background-color: var(--white-color);
            color: #000;
        }
    }
    
</style>
