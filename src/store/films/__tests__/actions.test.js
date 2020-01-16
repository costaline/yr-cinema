import mockAxios from 'jest-mock-axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  fetchFilmsStart,
  fetchFilmsSuccess,
  fetchFilmsFailure,
  fetchFilmsMock
} from '../actions';
import * as A from '../action-types';
import { dbGet } from '~services/api/firebase/connect';

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

describe('Test films fetch', () => {
  it('example get request', async () => {
    // call an async method which calls axios.get and returns the result
    const promise = dbGet('films.json');

    // mock response
    mockAxios.mockResponse({ data: 'test' });

    const result = await promise;

    expect(result).toEqual('test');
    expect(mockAxios.get).toHaveBeenCalled();
  });

  it('Fetch fetchFilmsMock success', async () => {
    const store = mockStore({});

    const fetchFilms = store.dispatch(fetchFilmsMock('films.json'));

    const responseData = { data: {}, total: 3 };

    const expectedActions = [
      fetchFilmsStart(),
      fetchFilmsSuccess(responseData)
    ];

    mockAxios.mockResponse({ data: responseData });

    await fetchFilms;

    expect(store.getActions()).toEqual(expectedActions);
  });
});
