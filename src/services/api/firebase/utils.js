export const transformData = (data) => {
  const { country, year } = data;

  const _country = country.split(',').map((c) => c.trim());
  const _year = +year;

  return {
    ...data,
    country: _country,
    year: _year,
    timestamp: { '.sv': 'timestamp' }
  };
};
