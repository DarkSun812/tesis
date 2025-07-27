import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.vue'

import Chart from 'chart.js/auto'
window.Chart = Chart

createApp(App).mount('#app')
