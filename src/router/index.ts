import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/cms/HomeView.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import Login from '@/views/authen/Login.vue'
import Admin from '@/views/cms/account/Admin.vue'
import User from '@/views/cms/account/User.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
        },
        {
            path: '/account',
            name: 'account',
            component: AdminLayout,
            children: [
                {
                    path: '/account/admin',
                    name: 'admin',
                    component: Admin,
                    meta: {child: true},
                },
                {
                    path: '/account/user',
                    name: 'user',
                    component: User,
                    meta: {child: true},
                }
            ]
        },
    ]
})

export default router
