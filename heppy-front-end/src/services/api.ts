import axios from 'axios';
const api = axios.create({
  baseURL:'https://lucashappy.herokuapp.com/'
});


export default api;