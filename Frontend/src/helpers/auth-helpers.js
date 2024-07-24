import Axios from 'axios';

const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY)
}

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}

export const initAxiosInterceptors = () => {
    Axios.interceptors.request.use(config => {
        const token = getToken()
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    })
    
}