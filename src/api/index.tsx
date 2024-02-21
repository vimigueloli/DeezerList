import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
});

export default api;

