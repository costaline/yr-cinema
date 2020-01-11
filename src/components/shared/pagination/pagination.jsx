import React from 'react';
import * as R from 'ramda';
import T from 'prop-types';
import styled from 'styled-components';

import PaginationItem from './pagination-item';

const Pagination = ({ total, limit, currentPage }) => {
  const pagesCount = Math.ceil(total / limit);

  const pages = R.range(1, pagesCount + 1);

  return (
    <StyledUl>
      {pages.map((page) => (
        <PaginationItem key={page} page={page} currentPage={currentPage} />
      ))}
    </StyledUl>
  );
};

Pagination.propTypes = {
  total: T.number,
  limit: T.number,
  currentPage: T.number
};

export default Pagination;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
