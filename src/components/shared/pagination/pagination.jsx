import React from 'react';
import { stringify } from 'query-string';
import T from 'prop-types';
import styled from 'styled-components';

import PaginationItem from './pagination-item';
import { getRange } from '~utils/pagination';

const Pagination = ({ total, limit, currentPage, sort }) => {
  const pagesCount = Math.ceil(total / limit);

  const pages = getRange(1, pagesCount);

  const querySettings = stringify({ limit, sort });

  return (
    <StyledUl>
      {pages.map((page) => (
        <PaginationItem
          key={page}
          page={page}
          querySettings={querySettings}
          currentPage={currentPage}
        />
      ))}
    </StyledUl>
  );
};

Pagination.propTypes = {
  total: T.number,
  limit: T.number,
  currentPage: T.number,
  sort: T.oneOf([1, -1])
};

export default React.memo(Pagination);

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
