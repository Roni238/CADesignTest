export const popupMixin = {
    methods: {
      closePopup() {
        this.$store.commit('popupModule/setActivePopup', '')
      },
      openPopup(popupName) {
        this.$store.commit('popupModule/setActivePopup', popupName)
      }
    },
  };