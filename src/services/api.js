import axios from "axios";

const api = axios.create({
    baseURL: "https://cloudapi.faratc.com",
    headers: {
        "Content-Type": "application/json"
    }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = localStorage.getItem("token");
    }
    return config;
});
api.interceptors.response.use((response) => {
    return response.data;
}, (err) => {
    err.message = err.response.data.message;
    return Promise.reject(err);
});

export default api;