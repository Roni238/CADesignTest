<template>
    <div class="input-container">
      <input
        type="tel"
        class="phone-input"
        required
        v-model="phone"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @input="formatPhone"
        :placeholder="isFocused ? placeholder : '' "
      />
      <label
        class="phone-label"
        :class="{ 'is-focused': isFocused }"
      >
        {{ placeholder }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phone: '+7 (',  // начальное значение
        isFocused: false, // отслеживания фокуса
      }
    },
    props: {
        placeholder:{
            type: String
        },
        required:{
            type: Boolean,
            default: true
        }
    },
    methods: {
      formatPhone() {
        let cleaned = this.phone.replace(/\D+/g, '') // убираю все, кроме цифр
        if (cleaned.startsWith('7')) {
          cleaned = cleaned.substring(1) // Убираем первую 7, если она есть
        }
  
        const part1 = cleaned.substring(0, 3);
        const part2 = cleaned.substring(3, 6);
        const part3 = cleaned.substring(6, 8);
        const part4 = cleaned.substring(8, 10);
  
        let formatted = '+7 (';
        if (part1) formatted += part1;
        if (part2) formatted += `) ${part2}`;
        if (part3) formatted += `-${part3}`;
        if (part4) formatted += `-${part4}`;
  
        this.phone = formatted;
      },
    },
    name: 'phone-input',
  };
  </script>
  
  <style lang="scss" scoped>
  .input-container {
    position: relative;
    width: 100%;
  }
  
  .phone-input {
    width: 100%;
    height: 70px;
    font-size: var(--p-size);
    font-weight: 400;
    line-height: 19.84px;
    color: var(--gray-dark-color);
    border: none;
    background-color: #f2f2f2;
    padding: 35px 28px 15px 28px;
    box-sizing: border-box;
    font-size: 16px;
    color: #000;
  
    &:focus {
      outline: none;
      border: var(--border-color) 1px solid;
      background-color: var(--white-color);
      color: #000;
    }
  }
  
  .phone-label {
    position: absolute;
    top: 12px;
    left: 24px;
    //transform: translateY(-50%);
    transition: all 0.3s ease;
    color: var(--gray-dark-color);
    pointer-events: none; /* чтобы клик по лейблу не перехватывал фокус инпута */
    font-size: 13px;
    opacity: 1;
  }
  
  .is-focused {
    top: 12px;
    left: 24px;
  }
  </style>
  