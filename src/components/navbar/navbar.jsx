import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

import * as PATH from '~routes/path';
import styles from './navbar.module.scss';

const NavBar = () => {
  const match = useRouteMatch('/');

  return (
    <div className={styles.navbar}>
      {!match.isExact && (
        <Link className={styles.brand} to="">
          yrCinema
        </Link>
      )}
      {match.isExact && <a className={styles.brand}>yrCinema</a>}
      <ul>
        <li>
          <NavLink to={`${PATH.HOME}`} exact activeClassName={styles.active}>
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
