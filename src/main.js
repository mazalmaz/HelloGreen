import { createApp } from 'vue'
import './assets/css/normalize.css'
import './assets/fonst/stylesheet.css'
import './assets/css/main.css'
import app from './App.vue'
import store   from './vuex/store';


createApp(app).use(store).mount('#app')






