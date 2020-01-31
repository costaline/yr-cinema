import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';

import * as PATH from '~routes/path';

import styles from './brand.module.scss';

const Brand = () => {
  const match = useRouteMatch('/');
  const { search } = useLocation();

  if (!match.isExact || !!search) {
    return (
      <Link className={styles.brand} to={PATH.HOME}>
        yrCinema
      </Link>
    );
  }

  return <p className={styles.brand}>yrCinema</p>;
};

export default Brand;
