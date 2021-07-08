import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

// getListings.then((response) => console.log('response ', response.data));

export default {
  getListings,
};
