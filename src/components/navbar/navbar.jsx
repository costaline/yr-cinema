import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './navbar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.brand} to="/">
        yrCinema
      </Link>
      <ul>
        <li>
          <NavLink to="/home" activeClassName={styles.active}>
            Films
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
