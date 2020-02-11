import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { fetchFilmInfo } from '~store/film-info/actions';
import { IFilmInfoState } from '~store/film-info/types';
import { Loader } from '~components/shared/loader';
import { ErrorMessage } from '~components/shared/error-message';
// TODO: declare hoc with-error-boundary
// @ts-ignore
import { withErrorBoundary } from '~hocs/with-error-boundary';
import FilmInfo from '~components/film-info-page/film-info';

interface IDispatchProps {
  fetchInfo: (resource: string) => void;
}

type IProps = IFilmInfoState & IDispatchProps;

const FilmInfoPage: React.FC<IProps> = (props) => {
  const { fetchInfo, isRequest, error, filmInfo } = props;
  const { filmId } = useParams();
  const resource = `films/${filmId}`;

  useEffect(() => {
    // TODO: fix return err w/o fetchData func
    async function fetchData() {
      await fetchInfo(resource);
    }
    fetchData();
  }, [fetchInfo, resource]);

  return (
    <>
      {isRequest && <Loader />}
      {error && <ErrorMessage />}
      {!isRequest && !error && filmInfo && <FilmInfo info={filmInfo} />}
    </>
  );
};

// TODO: type state
const mapStateToProps = (state: any): IFilmInfoState => {
  return {
    filmInfo: state.filmInfo.filmInfo,
    isRequest: state.filmInfo.isRequest,
    error: state.filmInfo.error
  };
};

export default compose(
  withErrorBoundary,
  connect(mapStateToProps, { fetchInfo: fetchFilmInfo })
)(FilmInfoPage);
