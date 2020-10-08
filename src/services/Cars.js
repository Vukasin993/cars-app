import axios from 'axios';

class Cars {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api';
    }
    async getAll() {
        const response = await axios.get('/cars');

        return response.data
    }

    add(data) {
        return axios.post('/cars', data);
        
    }

    getOne(id) {
        return axios.get(`/cars/${id}`);
    }

    edit(car)  {
        return axios.put(`/cars/${car.id}`, car);
    }

    delete(id)  {
        return axios.delete(`/cars/${id}`);
    }
}

export const cars = new Cars();