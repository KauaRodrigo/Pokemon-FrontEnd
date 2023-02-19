import axios from 'axios'
import { stringify } from 'qs'

export const api = axios.create({    
    baseURL: 'http://localhost:3000'    
})