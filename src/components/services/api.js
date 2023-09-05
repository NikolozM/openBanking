// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://10.74.74.10:96/',
  timeout: 5000, // Adjust the timeout as needed
});

export default instance;