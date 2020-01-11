import React from 'react';
import { Link } from 'react-router-dom';

const PaginationItem = ({ page, currentPage, url }) => {
  return (
    <li>
      <Link to={`${url}?page=${page}`}>{page}</Link>
    </li>
  );
};

export default PaginationItem;
