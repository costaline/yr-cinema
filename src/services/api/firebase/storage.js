import { v4 as uuidv4 } from 'uuid';

import { app } from './config';

export const storagePaths = {
  posters: 'images/posters/'
};

export const uploadFile = async (path, userId, file) => {
  const storageRef = app.storage().ref();

  const posterId = uuidv4();
  const fullPath = `${path + userId}/${posterId}---${file.name}`;

  const posterRef = storageRef.child(fullPath);

  try {
    const snapshot = await posterRef.put(file);
    const link = await snapshot.ref.getDownloadURL();
    return link;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteFile = async (link) => {
  const storage = app.storage();
  const ref = storage.refFromURL(link);

  try {
    await ref.delete();
  } catch (error) {
    throw new Error(error);
  }
};
