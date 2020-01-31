import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import * as PATH from '~routes/path';
import { getIsUser } from '~store/app/selectors';
import { userLogout } from '~store/auth/actions';
import UserProfile from './user-profile';
import Brand from './brand';

import styles from './navbar.module.scss';

const NavBar = ({ isUser, userLogout }) => {
  return (
    <div className={styles.navbar}>
      <Brand />
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
      {isUser && <UserProfile />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isUser: getIsUser(state)
});

export default connect(mapStateToProps, { userLogout })(NavBar);
