import { getRange, getPagination } from '../pagination';

describe('Utils', () => {
  it('get range', () => {
    const start = 1;
    const end = 3;

    const expectedValue = [1, 2, 3];

    expect(getRange(start, end)).toEqual(expectedValue);
  });

  it('get pagination', () => {
    const search = {
      page: '1',
      limit: '5',
      sort: '1'
    };

    const expectedValue = {
      currentPage: 1,
      currentLimit: 5,
      currentSort: 1
    };

    expect(getPagination(search)).toEqual(expectedValue);
  });
});
