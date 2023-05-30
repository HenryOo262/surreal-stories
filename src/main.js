import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import MainPage from './MainPage.vue'
import StoryPage from './StoryPage.vue'
import NotFound from './NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'main',
            path: '/',
            component: MainPage,
        },
        {
            name: 'story',
            path: '/story/:id',
            component: StoryPage,
        },
        {
            name: '404',
            path: '/:catchAll(.*)',
            component: NotFound,
        }
    ]
})

createApp(App).use(router).mount('#app')
