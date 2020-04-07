import axios from "axios";

export function getPins(search) {
    const token = localStorage.getItem('token')

    return axios.get('/api/pins?query=' + search, { headers: { Authorization: `Bearer ${token}` }});
}

export function signUp(email, password) {
    return axios.post('/api/users', {email, password});
}

export function login(email, password) {
    return axios.post('/api/users/login', {email, password});
}
