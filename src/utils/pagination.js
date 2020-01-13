import { parse } from 'query-string';

export const getPaginator = (search) => {
  const { page, limit, sort } = parse(search);

  const currentPage = page ? Number(page) : 1;
  const currentLimit = limit ? Number(limit) : 5;
  const currentSort = sort ? Number(sort) : 1;

  return { currentPage, currentLimit, currentSort };
};
