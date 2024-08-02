import api from "@/services/api.js";

export async function getUrl() {
    const response = await api.get("/instance");
    return response.data;
}

export async function check() {
    const response = await api.get("/check");
    return response.data;
}