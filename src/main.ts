import { createApp } from 'vue'
import App from './App.vue'
import Home from './views/home.vue'
import Doc from './views/Doc.vue'
import './index.scss'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc},
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
