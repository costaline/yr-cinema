import { stringify } from 'query-string';

import { db } from './connect';

import { transformData, sortData } from './utils';

/**
 * imitation of receiving a resource in PARTS
 * @param {string} resource                   - the name of the resource in
 * the singular for the formation of the identifier in the kind of
 * [resourceName]Id
 * @param {Object} currentQuery               - current query params
 * @param {number} currentQuery.currentPage   - current page
 * @param {number} currentQuery.currentLimit  - current limit
 * @param {number} currentQuery.currentSort   - current sort direction
 * @returns {{data: Array, total: number}}
 */
export const getResource = async (resource, currentQuery) => {
  const { currentPage, currentLimit, currentSort } = currentQuery;
  /** get ALL resource data from the server */
  const response = await db.get(`${resource}s.json`);

  /** convert to an array of objects */
  const transformedData = transformData(response.data, resource);

  /** sort by timestamp */
  const sortedData = sortData(transformedData, currentSort);

  /** determine the number of elements */
  const total = sortedData.length;

  /** get the starting point of loading */
  const startValue = sortedData[(currentPage - 1) * currentLimit].timestamp;

  /** form a request data */
  const queryData = {
    [currentSort === 1 ? 'limitToFirst' : 'limitToLast']: currentLimit,
    [currentSort === 1 ? 'startAt' : 'endAt']: startValue
  };
  /** request data to string */
  const queryRequest = stringify(queryData);

  /** get PART of the resource data from the server */
  const chunkResponse = await db.get(
    `${resource}s.json/?orderBy="timestamp"&${queryRequest}`
  );

  /** convert to an array of objects */
  const transformedChunkData = transformData(chunkResponse.data, resource);

  /** sort by timestamp */
  const data = sortData(transformedChunkData, currentSort);

  return { data, total };
};
