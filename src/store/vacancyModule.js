export default {
    //списков вакансий нигде не видел, по этому делаю загрузку по одной вакансии но можно загружать и по несколько если добавить массив вакансий
    state:()=>({
        vacancy: null,
        resume:{}
    }),
    mutations:{
        setVacancy(state, vacancy){ state.vacancy = vacancy },
    },
    getters:{
        getVacancy(state){
            return state.vacancy
        },
    },
    actions:{
        async fetchVacancyData({commit}, skip = 0){
            try {
                console.log(skip)
                //тут должно быть обращение к методу в сервисе который уже и делает запросы
                //skip передаем для загрузки конкретной вакансии (если загружаются по одной)
                const response = await fetch("/data/vacancyData.json")
                // if (!response.ok) {                            //эту проверу можно открыть если error.message сделан на сервере 
                //     commit('setError' error)                   //(вместо вакансии может прийти текст ошибки со статусом 200)
                //     throw new Error('Ошибка загрузки данных'); // например 
                // }                                              //{ status:200, errorMessage: "сейчас вакансии отстутствуют || недоступны в вашем регионе" }
                const data = await response.json()
                commit('setVacancy', data)
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error)
            }
        },

        async sendResume({state, commit}){
            try {
                // тут должна быть проверка и всех полей
                // обращение к сервису и к методу отправки sendResume(state.resume)
                // commit('resumeClear') если нужно можно очистить, или оставить для удобства 
                console.log('отправленно', state.resume)
                commit('popupModule/setActivePopup', 'popup-sends-message', { root: true });
            } catch (error) {
                console.error("Ошибка отправки", error)
            }
        }
    },
    namespaced:true
}