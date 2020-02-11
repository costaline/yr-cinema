import { getResource } from './request-get';
import { db } from './connect';

const newGetResource = async (resource) => {
  try {
    const response = await db.get(`${resource}.json`);
    return response.data;
  } catch (err) {
    throw `'${err.message}' occurred while requesting '${resource}'`;
  }
};

export { getResource, newGetResource };
