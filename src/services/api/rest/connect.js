import axios from 'axios';

export const db = axios.create({
  baseURL: 'https://yr-cinema.firebaseio.com/'
});

export const dbGet = async (resourceUrl) => {
  try {
    const response = await db.get(resourceUrl);
    return response.data;
  } catch (err) {
    throw `'${err.message}' occurred while requesting '${resourceUrl}'`;
  }
};
