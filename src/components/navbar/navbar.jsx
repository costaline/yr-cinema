import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

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
          <NavLink to="/" exact activeClassName={styles.active}>
            Films
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
