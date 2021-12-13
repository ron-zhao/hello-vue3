
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';


const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        componet: ()=> import('@/pages/home/index.vue')
    }
]
const routes = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    scrollBehavior: () => ({
      top: 0,
    }),
    routes: constantRoutes
});
export default routes;