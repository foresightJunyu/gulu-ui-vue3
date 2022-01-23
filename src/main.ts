import { createApp } from 'vue'
import App from './App.vue'
import Test from './components/test.vue'
import Test2 from './components/test2.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Test},
        {path: '/xxx', component: Test2},
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
