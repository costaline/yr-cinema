import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  fetchFilmsStart,
  fetchFilmsSuccess,
  fetchFilmsFailure
} from '../actions';
import * as A from '../action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test films actions', () => {
  it('Fetch films start', () => {
    expect(fetchFilmsStart()).toEqual({
      type: A.FETCH_FILMS_START
    });
  });

  it('Fetch films success', () => {
    expect(fetchFilmsSuccess({ data: [1, 2, 3], total: 10 })).toEqual({
      type: A.FETCH_FILMS_SUCCESS,
      filmsData: { data: [1, 2, 3], total: 10 }
    });
  });

  it('Fetch films failure', () => {
    expect(fetchFilmsFailure('Error message')).toEqual({
      type: A.FETCH_FILMS_FAILURE,
      error: 'Error message'
    });
  });
});

describe('Test fetch films', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Fetch films', () => {
    console.log(
      'fetch films is imitation of receiving a resource in PARTS,' +
        ' need to refactor...'
    );
    fetchMock.getOnce('', {
      headers: { 'content-type': 'application/json' },
      body: {}
    });
  });
});
