import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import T from 'prop-types';

import { FilmsList } from '~components/home-page/films-list';
import { withErrorBoundary } from '~hocs/with-error-boundary';
import { fetchFilms } from '~store/films/actions';
import {
  getFilms,
  getLoading,
  getError,
  getTotal
} from '~store/films/selectors';
import { Loader } from '~components/shared/loader';
import { ErrorMessage } from '~components/shared/error-message';
import Pagination from '~components/shared/pagination/pagination';

const HomePage = ({ fetchFilms, films = [], total, loading, error }) => {
  useEffect(() => {
    fetchFilms();
  }, []);


  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <FilmsList films={films} />
      {!loading && total && <Pagination total={total} limit={5} url="/" currentPage={1} />}
    </div>
  );
};

HomePage.propTypes = {
  fetchFilms: T.func.isRequired,
  films: T.array,
  total: T.number,
  loading: T.bool.isRequired,
  error: T.shape({
    message: T.string
  })
};

const mapStateToProps = (state) => {
  return {
    films: getFilms(state),
    total: getTotal(state),
    loading: getLoading(state),
    error: getError(state)
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(, dispatch);
// };

export default compose(
  connect(mapStateToProps, { fetchFilms }),
  withErrorBoundary
)(HomePage);
