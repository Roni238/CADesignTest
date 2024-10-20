import { createStore } from 'vuex'

export default createStore({
  state: {
    openCallPopup:true
  },
  getters: {
    getOpenCallPopup(state){return state.openCallPopup}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
