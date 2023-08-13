import { createApp } from 'vue'
import './assets/css/normalize.css'
import './assets/fonst/stylesheet.css'
import './assets/css/main.css'
import app from './App.vue'
import store   from './vuex/store'
import router from './router'
import YmapPlugin from 'vue-yandex-maps'



const settings = {
    apiKey: '51d7f938-02e1-48a6-9665-c76c6b10aebe',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
}

createApp(app).use(router).use(store).use(YmapPlugin, settings).mount('#app');







