import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import InstancePage from "@/pages/InstancePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: LoginPage, name: "LoginPage"},
        {path: '/instance', component: InstancePage, name: 'Instance'},
    ]
});

export default router;