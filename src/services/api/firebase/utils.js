/**
 * transformation of data consisting of a set keys as id and an object as a
 * value
 * @param {Object} data
 * @param {string} resource - the name of the resource in the singular for
 * the formation of the identifier in the kind of [resourceName]Id
 * @returns {Object[]}
 */
export const transformData = (data, resource = '') => {
  return Object.keys(data).map((key) => {
    return {
      [`${resource}Id`]: key,
      ...data[key]
    };
  });
};

/**
 * array sorting by parameter timestamp
 * @param {Array} data
 * @param {number} sortDirection - sorting direction: 1 - direct, -1 - reverse
 * @returns {Array}
 */
export const sortData = (data, sortDirection = 1) => {
  return data.sort((a, b) => (a.timestamp - b.timestamp) * sortDirection);
};
