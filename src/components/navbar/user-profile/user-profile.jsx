import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getUser } from '~store/auth/selectors';
import logo from './user-logo.jpg';

const UserProfile = ({ user }) => {
  const { name, email, photoUrl } = user;

  return (
    <SProfile>
      <p>{name || email}</p>
      <img src={photoUrl || logo} alt={name} />
    </SProfile>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state)
});

export default connect(mapStateToProps)(UserProfile);

const SProfile = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 5px;

    color: white;
  }

  img {
    width: 30px;
    height: 30px;

    border-radius: 30px;
  }
`;
