import axios from 'axios';
import NProgress from 'nprogress';

export function useApi(token?) {
  const api = axios.create({
    // baseURL: 'https://weblai-strapi.herokuapp.com',
    baseURL: 'http://localhost:1337',
  });

  const coinApiKey = '9b1dea6cbb3b8c49ae6aea79b00213308e020e6f';
  const coinApi = axios.create({
    baseURL: 'https://api.nomics.com/v1',
  });

  // https://api.nomics.com/v1
  // 9b1dea6cbb3b8c49ae6aea79b00213308e020e6f
  //api.nomics.com/v1/currencies/ticker?key=9b1dea6cbb3b8c49ae6aea79b00213308e020e6f&ids=BTC,ETH&interval=1d

  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token.value}`;
  }

  api.interceptors.request.use(
    (config) => {
      NProgress.start();
      return config;
    },
    (error) => {
      NProgress.done();
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      NProgress.done();
      return response;
    },
    (error) => {
      NProgress.done();
      return Promise.reject(error);
    }
  );

  https: return {
    api,
    coinApi,
    coinApiKey,
  };
}
