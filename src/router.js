import VueRouter from 'vue-router'

// pages
import Index from './pages/Index'

const routes = [
    {
        path: '/index',
        component: Index,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/',
        component: Index,
        meta: {
            title: '首页'
        }
    }
];

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default {
    router
}