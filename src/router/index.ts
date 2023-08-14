import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        {
            path: '/home',
            name: 'home',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    name: 'DashBoardManagement',
                    component: HomeView,
                    meta: {child: true},
                }
            ]
        }
    ]
})

export default router
