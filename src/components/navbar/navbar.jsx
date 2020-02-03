import React from 'react';
import { connect } from 'react-redux';

import { getIsUser } from '~store/app/selectors';
import { userLogout } from '~store/auth/actions';
import UserProfile from './user-profile';
import Brand from './brand';
import NavList from './nav-list';

import styles from './navbar.module.scss';

const NavBar = ({ isUser, userLogout }) => {
  const navListProps = { isUser, userLogout };

  return (
    <header className={styles.navbar}>
      <Brand />
      <NavList {...navListProps} />
      {isUser && <UserProfile />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isUser: getIsUser(state)
});

export default connect(mapStateToProps, { userLogout })(NavBar);
