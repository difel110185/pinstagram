import axios from "axios";

export function getPins(search, email, liked) {
    const token = localStorage.getItem('token')

    return axios.get('/api/pins?email=' + email + '&query=' + search, { headers: { Authorization: `Bearer ${token}` }});
}

export function signUp(email, password) {
    return axios.post('/api/users', {email, password});
}

export function login(email, password) {
    return axios.post('/api/users/login', {email, password});
}

export function likePin(email, pin_id, liked) {
    return axios.post(`/api/like-pin`, {email, pin_id, liked});
}
