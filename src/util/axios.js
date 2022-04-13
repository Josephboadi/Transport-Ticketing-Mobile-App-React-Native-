import axios from 'axios';
import {REACT_APP_SERVER_URL} from '@env';

const axiosInstance = axios.create({
  baseURL: REACT_APP_SERVER_URL,
});

export default axiosInstance;
