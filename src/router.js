import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: LoginPage, name: "LoginPage"}
    ]
});

export default router;