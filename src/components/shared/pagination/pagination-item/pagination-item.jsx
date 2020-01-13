import React from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import styled from 'styled-components';

const PaginationItem = ({ page, currentPage, querySettings }) => {
  return (
    <StyledLi page={page} currentPage={currentPage}>
      <Link to={`/?${querySettings}&page=${page}`}>{page}</Link>
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
  width: 25px;
  height: 25px;
  border: 1px solid grey;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 2px;
  background-color: ${({ page, currentPage }) =>
    page === currentPage ? 'lightblue' : 'lightgoldenrodyellow'};

  &:hover {
    background-color: #2d79ff;
    color: white;
  }

  & a {
    display: block;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    color: inherit;
  }
`;
