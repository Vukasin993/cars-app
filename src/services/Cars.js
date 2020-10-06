import axios from 'axios';

class Cars {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api';
    }
    async getAll() {
        const response = await axios.get('/cars');

        return response.data
    }
}

export const cars = new Cars();