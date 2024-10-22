export default {
    beforeMount(el, binding) {
      const options = {
        rootMargin: '50px', // Отступ, для начала загрузки
        threshold: 0.1 // Порог видимости, при котором изображение начнет загружаться
      }
  
      const loadImage = () => {
        el.src = binding.value
      }
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImage()
            observer.unobserve(el)
          }
        })
      }, options)
  
      observer.observe(el)
    }
  };