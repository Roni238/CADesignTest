export const dateMixin = {
    methods: {
      // форматирование даты
      formatDate(date) {
        if (!date) return ''
        const [day, month, year] = date.split('.')
        const months = [
          "января", "февраля", "марта", "апреля", "мая", "июня",
          "июля", "августа", "сентября", "октября", "ноября", "декабря"
         ]
         
        return `${parseInt(day)} ${months[parseInt(month) - 1]} 20${year}`
      },
    },
  };