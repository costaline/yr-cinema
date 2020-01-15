import { transformData, sortData } from '../utils';

describe('Firebase utils', () => {
  it('Transform data', () => {
    const ids = ['kjf8d8', 'jk3ji3'];

    const data = {
      [ids[0]]: { key1: 'val11', key2: 'val12' },
      [ids[1]]: { key1: 'val21', key2: 'val22' }
    };

    const resource = 'resource';

    const expectedValue = [
      { [`${resource}Id`]: ids[0], ...data.kjf8d8 },
      { [`${resource}Id`]: ids[1], ...data.jk3ji3 }
    ];

    expect(transformData(data, resource)).toEqual(expectedValue);
  });

  it('Sort data by timestamp', () => {
    const data = [
      { key: 'value', timestamp: 100 },
      { key: 'value', timestamp: 111 },
      { key: 'value', timestamp: 101 }
    ];

    const sortDirection = 1;

    const expectedValue = [data[0], data[2], data[1]];

    expect(sortData(data, sortDirection)).toEqual(expectedValue);
  });
});
