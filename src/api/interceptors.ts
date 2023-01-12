import { AxiosInstance } from 'axios';
import { CLIENT_RENDERED } from 'src/constants/window';
import { getAccessToken } from 'src/utils/auth';

function setInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config) => {
      if (CLIENT_RENDERED && config.headers) {
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
