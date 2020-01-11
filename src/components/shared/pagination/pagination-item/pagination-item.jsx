import React from 'react';
import { Link } from 'react-router-dom';

const PaginationItem = ({ page, currentPage = 1 }) => {
  return (
    <li>
      <Link to={`/?page=${page}`}>{page}</Link>
    </li>
  );
};

export default PaginationItem;
