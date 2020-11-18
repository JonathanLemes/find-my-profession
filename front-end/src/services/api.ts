import axios from 'axios';

const api = axios.create({
    baseURL: 'https://glacial-earth-21066.herokuapp.com'
});

export default api;