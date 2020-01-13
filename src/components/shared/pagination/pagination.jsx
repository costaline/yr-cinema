import React from 'react';
import * as R from 'ramda';
import T from 'prop-types';
import styled from 'styled-components';

import PaginationItem from './pagination-item';
import { stringify } from 'query-string';

const Pagination = ({ total, limit, currentPage, sort }) => {
  const pagesCount = Math.ceil(total / limit);

  const pages = R.range(1, pagesCount + 1);

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
  currentPage: T.number
};

export default React.memo(Pagination);

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
