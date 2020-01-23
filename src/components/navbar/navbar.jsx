import React from 'react';
import { Link, NavLink, useRouteMatch, useLocation } from 'react-router-dom';

import * as PATH from '~routes/path';
import styles from './navbar.module.scss';

const NavBar = () => {
  const match = useRouteMatch('/');
  const { search } = useLocation();

  return (
    <div className={styles.navbar}>
      {!match.isExact || !!search ? (
        <Link className={styles.brand} to="/">
          yrCinema
        </Link>
      ) : (
        <p className={styles.brand}>yrCinema</p>
      )}
      <ul>
        <li>
          <NavLink to={`${PATH.FILMS}`} exact activeClassName={styles.active}>
            Films
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${PATH.AUTH + PATH.SIGNIN}`}
            activeClassName={styles.active}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
