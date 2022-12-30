import { AxiosInstance } from 'axios';
import { getAccessToken } from 'src/utils/auth';

function setInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config) => {
      if (typeof window !== 'undefined' && config.headers) {
        config.headers.Authorization = `Bearer ${getAccessToken()}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
}

export default setInterceptors;
