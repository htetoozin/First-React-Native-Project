import { create } from 'apisauce';
import cache from '../utility/cache';

const apiClient = create({
  baseURL: 'https://peaceful-sierra-12369.herokuapp.com/api',
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  console.log('response ', response);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
