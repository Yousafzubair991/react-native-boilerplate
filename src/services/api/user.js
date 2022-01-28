import apiClient from "./client";


const login = (email, password) => apiClient.post('/users/login', { email, password })

export default {
    login
};
