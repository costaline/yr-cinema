import axios from 'axios';
import queryString from 'querystring';

const firebase = axios.create({
  baseURL: 'https://yr-cinema.firebaseio.com/'
});

export const db = {
  // имитация получение ресурса по частям
  getResource: (resource, currentPage) => getResource(resource, currentPage)
};

// TODO: перенести в настройки пользователя: limit, sortDirection
// количество элементов для загрузки
const limit = 5;
// направление сортировки массива по timestamp
const sortDirection = 1;

// имитация получение ресурса по частям
const getResource = async (resource, currentPage = 1) => {
  // получаем ВСЕ данные о ресурсе с сервера
  const response = await firebase.get(`${resource}s.json`);

  // преобразуем в массив объектов
  const transformedData = transformData(response.data, resource);

  // сортируем по timestamp
  const sortedData = sortData(transformedData, sortDirection);

  // определяем количество элементов
  const total = sortedData.length;

  // определяем количество страниц
  const pagesCount = Math.ceil(total / limit);

  // заполняем массив страниц
  const pages = range(1, pagesCount);

  // получаем начальную точку загрузки
  const startValue = sortedData[(currentPage - 1) * limit].timestamp;

  // формируем запрос
  const queryData = {
    [sortDirection === 1 ? 'limitToFirst' : 'limitToLast']: limit,
    [sortDirection === 1 ? 'startAt' : 'endAt']: startValue
  };
  const query = queryString.stringify(queryData);

  // получаем часть данных о ресурсе с сервера
  const chunkResponse = await firebase.get(
    `${resource}s.json/?orderBy="timestamp"&${query}`
  );

  // преобразуем в массив объектов
  const transformedChunkData = transformData(chunkResponse.data, resource);

  // сортируем по timestamp
  const sortedChunkData = sortData(transformedChunkData, sortDirection);
  console.log('sortedChunkData: ', sortedChunkData);

  return sortedChunkData;
};

// дополнительные функции -----------------------------------------------
// трансформация объекта объектов в массив объектов c id
const transformData = (data, resource) => {
  return Object.keys(data).map((key) => {
    return {
      [`${resource}Id`]: key,
      ...data[key]
    };
  });
};

// сортировка массива по timestamp
const sortData = (data, sortDirection = 1) => {
  return data.sort((a, b) => (a.timestamp - b.timestamp) * sortDirection);
};

// заполнение массива страниц
const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};
