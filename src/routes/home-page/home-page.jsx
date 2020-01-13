import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import T from 'prop-types';
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
import Pagination from '~components/shared/pagination';
import { getPagination } from '~utils/pagination';

const HomePage = (props) => {
  const { fetchFilms, films = [], total, loading, error, location } = props;

  const currentQuery = useMemo(() => getPagination(location.search), [
    location.search
  ]);

  useEffect(() => {
    fetchFilms(currentQuery);
  }, [fetchFilms, currentQuery]);

  return (
    <>
      <StyledContent>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {!loading && !error && <FilmsList films={films} />}
      </StyledContent>

      {total && (
        <Pagination
          total={total}
          limit={currentQuery.currentLimit}
          currentPage={currentQuery.currentPage}
          sort={currentQuery.currentSort}
        />
      )}
    </>
  );
};

HomePage.propTypes = {
  fetchFilms: T.func.isRequired,
  films: T.array,
  total: T.number,
  loading: T.bool.isRequired,
  error: T.string,
  location: T.shape({
    search: T.string
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
