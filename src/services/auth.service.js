import api from "@/services/api.js";

export async function login(values) {
    const response = await api.post("/auth/login", values);
    return response.data;
}
