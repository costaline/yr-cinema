import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import T from 'prop-types';

import * as PATH from '~routes/path';
import { withErrorBoundary } from '~hocs/with-error-boundary';
import AddFilmForm from '~components/add-film-page/add-film-form';
import { getUser } from '~store/auth/selectors';
import { getPosterLink } from '~store/add-film/selectors';
import { posterAdd, posterRemove, addFilm } from '~store/add-film/actions';

export const AddFilmPage = (props) => {
  const { isUser, user } = props;
  const { posterLink, posterAdd, posterRemove } = props;
  const { addFilm } = props;

  if (!isUser) {
    return <Redirect to={PATH.HOME} />;
  }

  const onAddFile = (evt) => {
    if (evt.target.files.length) {
      posterAdd(user.uid, evt.target.files[0]);
    }
  };

  const onRemoveFile = () => posterRemove(posterLink);

  const onSubmitHandler = (data) => addFilm(data);

  const addFilmProps = {
    posterLink,
    onAddFile,
    onRemoveFile,
    onSubmit: onSubmitHandler
  };

  return <AddFilmForm {...addFilmProps} />;
};

AddFilmPage.propTypes = {
  isUser: T.bool,
  user: T.shape({ uid: T.string }),
  posterLink: T.string,
  posterAdd: T.func,
  posterRemove: T.func,
  addFilm: T.func
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  posterLink: getPosterLink(state)
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ posterAdd, posterRemove, addFilm }, dispatch);

export default compose(
  withErrorBoundary,
  connect(mapStateToProps, mapDispatchToProps)
)(AddFilmPage);
