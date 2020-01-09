import axios from 'axios';

const firebase = axios.create({
  baseURL: 'https://yr-cinema.firebaseio.com/'
});

export const db = {
  /**
   * Receiving data from the server
   * @param {string} resource - requested resource in the singular
   * @returns {Array}
   */
  getResource: async (resource) => {
    try {
      const response = await firebase.get(`${resource}s.json`);

      const data = transformResponseData(response.data, resource);
      return data;
    } catch (err) {
      throw err.message;
    }
  }
};

/**
 * Transformation of data from an object into an array with an id in the form of a resource value
 * @param {Object} data - data after response
 * @param {string} resource - name used for dynamic id
 * @returns {Array} - an array of data objects
 */
const transformResponseData = (data, resource) => {
  const transformData = Object.keys(data).map((key) => ({
    [`${resource}Id`]: key,
    ...data[key]
  }));

  return transformData;
};
