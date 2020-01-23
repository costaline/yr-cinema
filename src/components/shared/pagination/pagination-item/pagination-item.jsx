import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import T from 'prop-types';
import styled from 'styled-components';

import theme from '~src/app/theme.scss';

const PaginationItem = ({ page, currentPage, querySettings }) => {
  const { path } = useRouteMatch();

  return (
    <StyledLi page={page} currentPage={currentPage}>
      <Link to={`${path}?${querySettings}&page=${page}`}>{page}</Link>
    </StyledLi>
  );
};

PaginationItem.propTypes = {
  page: T.number,
  currentPage: T.number,
  querySettings: T.string
};

export default PaginationItem;

const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  margin: 2px;

  border: 2px solid ${theme.mainColor};

  overflow: hidden;

  & a {
    display: block;
    padding: 10px;

    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: ${({ page, currentPage }) =>
      page === currentPage ? 'white' : theme.mainColor};

    background-color: ${({ page, currentPage }) =>
      page === currentPage ? theme.mainColor : 'lightgoldenrodyellow'};

    opacity: 1;

    &:hover {
      color: white;

      background-color: ${theme.mainColor};

      opacity: 0.7;
    }
  }
`;
