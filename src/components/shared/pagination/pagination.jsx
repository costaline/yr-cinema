import React from 'react';
import PaginationItem from './pagination-item';

const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);

  const pages = range(1, pagesCount);

  return (
    <ul>
      {pages.map((page) => (
        <PaginationItem
          page={page}
          currentPage={currentPage}
          url={url}
          key={page}
        />
      ))}
    </ul>
  );
};

export default Pagination;

const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};
