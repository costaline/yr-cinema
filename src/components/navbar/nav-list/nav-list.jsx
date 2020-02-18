import React from 'react';
import { NavLink } from 'react-router-dom';
import T from 'prop-types';

import * as PATH from '~routes/path';

import styles from './nav-list.module.scss';

const NavList = ({ isUser, userLogout }) => {
  return (
    <nav className={styles.navList}>
      <ul>
        <li>
          <NavLink to={PATH.FILMS} exact activeClassName={styles.active}>
            Films
          </NavLink>
        </li>
        {isUser && (
          <li>
            <NavLink
              to={PATH.FILMS + PATH.ADD}
              exact
              activeClassName={styles.active}
            >
              Add Film
            </NavLink>
          </li>
        )}
        <li>
          {!isUser ? (
            <NavLink
              to={PATH.AUTH + PATH.SIGNIN}
              activeClassName={styles.active}
            >
              Login
            </NavLink>
          ) : (
            <a onClick={() => userLogout()}>Logout</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavList;

NavList.propTypes = {
  isUser: T.bool.isRequired,
  userLogout: T.func
};
