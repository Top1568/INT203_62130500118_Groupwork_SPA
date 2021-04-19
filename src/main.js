import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseHoverBlock from '../src/components/BaseHoverBlock.vue'
import BaseArticle from '../src/components/BaseArticle.vue'

const app = createApp(App)
app.use(router)
app.component('base-hover-block', BaseHoverBlock)
app.component('base-article', BaseArticle)
app.mount('#app')
