import React from 'react';
import { Link, NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import * as PATH from '~routes/path';
import { getIsUser } from '~store/app/selectors';
import { userLogout } from '~store/auth/actions';

import styles from './navbar.module.scss';

const NavBar = ({ isUser, userLogout }) => {
  const match = useRouteMatch('/');
  const { search } = useLocation();

  return (
    <div className={styles.navbar}>
      {!match.isExact || !!search ? (
        <Link className={styles.brand} to={PATH.HOME}>
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
          {!isUser ? (
            <NavLink
              to={`${PATH.AUTH + PATH.SIGNIN}`}
              activeClassName={styles.active}
            >
              Login
            </NavLink>
          ) : (
            <a onClick={() => userLogout()}>Logout</a>
          )}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isUser: getIsUser(state)
});

export default connect(mapStateToProps, { userLogout })(NavBar);
