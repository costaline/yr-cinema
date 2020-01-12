import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import T from 'prop-types';
import queryString from 'query-string';
import styled from 'styled-components';

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
  // TODO: вынести определение текущей страницы в hoc
  const parsedQuery = queryString.parse(location.search);

  const currentPage = Number(parsedQuery.page) || 1;

  useEffect(() => {
    fetchFilms(currentPage);
  }, [currentPage]);

  return (
    <>
      <StyledContent>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {!loading && !error && <FilmsList films={films} />}
      </StyledContent>

      {total && (
        <Pagination total={total} limit={5} currentPage={currentPage} />
      )}
    </>
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

export default compose(
  connect(mapStateToProps, { fetchFilms }),
  withErrorBoundary
)(HomePage);

const StyledContent = styled.div`
  min-height: 475px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
