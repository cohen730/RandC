import { createRouter, createWebHistory } from 'vue-router'
import Home from "./components/Home.vue";
import About from "./components/about.vue";
import catering from "./components/catering.vue";
import Menu from "./components/Menu.vue";
import Gallery from "./components/gallery.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // your routes go here
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/catering',
            name: 'catering',
            component: catering
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: Gallery
        }
    ]
})

export default router

