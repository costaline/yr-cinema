import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import T from 'prop-types';

import { FilmsList } from '~components/home-page/films-list';
import { withErrorBoundary } from '~hocs/with-error-boundary';
import { fetchFilms } from '~store/films/actions';
import { getFilms, getLoading, getError } from '~store/films/selectors';
import { Loader } from '~components/shared/loader';
import { ErrorMessage } from '~components/shared/error-message';

const HomePage = ({ fetchFilms, films, loading, error }) => {
  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <FilmsList films={films} />
    </div>
  );
};

HomePage.propTypes = {
  fetchFilms: T.func.isRequired,
  films: T.array.isRequired,
  loading: T.bool.isRequired,
  error: T.shape({
    message: T.string
  })
};

const mapStateToProps = (state) => {
  return {
    films: getFilms(state),
    loading: getLoading(state),
    error: getError(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchFilms }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withErrorBoundary
)(HomePage);
