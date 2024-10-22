import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/css/_variables.css'; 
import vLazy from './directives/v-lazy';

const app = createApp(App);

app.directive('lazy', vLazy)

app.use(store).use(router).mount('#app')
