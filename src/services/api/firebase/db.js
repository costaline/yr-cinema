import { app } from './config';
import { transformData } from './utils';

export const addContent = async (data, path) => {
  const database = app.database();
  const transformedData = transformData(data);

  try {
    await database
      .ref(path)
      .push()
      .set(transformedData);
  } catch (error) {
    throw new Error(error.message);
  }
};
