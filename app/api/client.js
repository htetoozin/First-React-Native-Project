import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'https://peaceful-sierra-12369.herokuapp.com/api',
});

export default apiClient;
