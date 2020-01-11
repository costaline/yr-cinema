import React from 'react';
import * as R from 'ramda';
import T from 'prop-types';

import PaginationItem from './pagination-item';

const Pagination = ({ total, limit, url, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);

  const pages = R.range(1, pagesCount + 1);

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

Pagination.propTypes = {
  total: T.number,
  limit: T.number,
  url: T.any,
  currentPage: T.number
};

export default Pagination;
