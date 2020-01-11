import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PaginationItem = ({ page, currentPage = 1 }) => {
  return (
    <StyledLi page={page} currentPage={currentPage}>
      <Link to={`/?page=${page}`}>{page}</Link>
    </StyledLi>
  );
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
  margin: 2px;
  background-color: ${({ page, currentPage }) =>
    page === currentPage ? 'lightblue' : 'lightgoldenrodyellow'};

  &:hover {
    background-color: #2d79ff;
    color: white;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }
`;
