import axios from 'axios';
import { config } from '../../config/config';

export const httpService = axios.create({
  baseURL: config.baseUrl,
  timeout: 5000,
});
