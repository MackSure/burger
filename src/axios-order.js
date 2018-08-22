import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://burger-15f2c.firebaseio.com/'
});

export default instance;