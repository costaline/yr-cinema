import { stringify } from 'query-string';

import { db } from './connect';

import { transformData, sortData } from './utils';

// имитация получение ресурса по частям
export const getResource = async (resource, currentQuery) => {
  // получаем ВСЕ данные о ресурсе с сервера
  const response = await db.get(`${resource}s.json`);

  // преобразуем в массив объектов
  const transformedData = transformData(response.data, resource);

  // сортируем по timestamp
  const sortedData = sortData(transformedData, currentQuery.currentSort);

  // определяем количество элементов
  const total = sortedData.length;

  // получаем начальную точку загрузки
  const startValue =
    sortedData[(currentQuery.currentPage - 1) * currentQuery.currentLimit]
      .timestamp;

  // формируем запрос
  const queryData = {
    [currentQuery.currentSort === 1
      ? 'limitToFirst'
      : 'limitToLast']: currentQuery.currentLimit,
    [currentQuery.currentSort === 1 ? 'startAt' : 'endAt']: startValue
  };
  const queryRequest = stringify(queryData);

  // получаем часть данных о ресурсе с сервера
  const chunkResponse = await db.get(
    `${resource}s.json/?orderBy="timestamp"&${queryRequest}`
  );

  // преобразуем в массив объектов
  const transformedChunkData = transformData(chunkResponse.data, resource);

  // сортируем по timestamp
  const data = sortData(transformedChunkData, currentQuery.currentSort);
  // console.log('sortedChunkData: ', data);

  return { data, total };
};
