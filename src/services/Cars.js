import axios from 'axios';

class Cars {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api';
        axios.interceptors.request.use(function(config) {
            const token = localStorage.getItem('token');
            if(token) {
                config.headers.Authoratization = "Bearer " + token;
            }
            return config;
        });
    }
    async getAll() {
        const response = await axios.get('/cars');
        console.log('nema auta');
        return response.data
    }

    add(data) {
        return axios.post('/cars', data);
        
    }

    getOne(id) {
        return axios.get(`/cars/${id}`);
    }

    edit(id)  {
        return axios.put(`/cars/${id}`);
    }

    delete(id)  {
        return axios.delete(`/cars/${id}`);
    }
}

export const cars = new Cars();