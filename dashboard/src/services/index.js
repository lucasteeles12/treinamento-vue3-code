import axios from 'axios'
import AuthService from './auth'

const API_ENVS = {
    production:'',
    development:'',
    local: 'http://localhost:5173'
}

const httpClient = axios.create({
    baseURL: API_ENVS.local
})

export default {
    auth: AuthService(httpClient)
}