import axios from 'axios';

export const db = axios.create({
  baseURL: 'https://yr-cinema.firebaseio.com/'
});
