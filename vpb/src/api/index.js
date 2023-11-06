import axios from 'axios';

const url = 'http://localhost:3000/api/services';

export const fetchServices = () => axios.get(url);