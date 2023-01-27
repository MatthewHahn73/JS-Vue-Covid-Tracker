import { createApp } from 'vue'
import App from './App.vue'
import Charts from './assets/charts.css'

createApp(App)
    .use(Charts)
    .mount('#app')
