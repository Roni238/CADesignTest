export default {
    state:()=>({
        activePopup:"",
    }),
    mutations:{
        setActivePopup(state, popupName){
            state.activePopup = popupName
        },
    },
    getters:{
        getActivePopup(state){
            return state.activePopup
        },
    },
    namespaced:true
}