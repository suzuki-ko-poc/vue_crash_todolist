import { createApp } from 'vue'
import App from './App.vue'

import wrapRouter from './router/wrapRouter'


createApp(App).use(wrapRouter).mount('#app')
