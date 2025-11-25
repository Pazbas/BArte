import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Importar Bootstrap JS (necesario para el navbar hamburguesa)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(router).mount('#app')
