import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL:"http://192.168.1.12:8000/api",
})

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  } catch (err) {
    alert(err);
  }
});

export default api;