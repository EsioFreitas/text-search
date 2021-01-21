import axios from 'axios';

const api = axios.create({
  baseURL: 'http://164.41.91.132:8000/database/'
});

export default api;