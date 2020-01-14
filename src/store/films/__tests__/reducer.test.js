import { filmsReducer, initialState } from '../reducer';
import * as A from '../action-types';

describe('Test films reducer', () => {
  it('Fetch films start', () => {
    const prevState = {
      ...initialState
    };

    const action = { type: A.FETCH_FILMS_START };

    expect(filmsReducer(prevState, action)).toEqual({
      ...prevState,
      loading: true
    });
  });

  /*  it('Fetch films start after success', () => {
    const prevState = {
      ...initialState,
      loading: false,
      films: { data: [1, 2, 3], total: 10 }
    };

    const action = { type: A.FETCH_FILMS_START };

    expect(filmsReducer(prevState, action)).toEqual({
      ...prevState,
      loading: true,
      films: {}
    });
  });*/

  it('Fetch films start after failure', () => {
    const prevState = {
      ...initialState,
      loading: false,
      error: 'Error message'
    };

    const action = { type: A.FETCH_FILMS_START };

    expect(filmsReducer(prevState, action)).toEqual({
      ...prevState,
      loading: true,
      error: null
    });
  });

  it('Fetch films success', () => {
    const prevState = {
      ...initialState,
      loading: true
    };

    const action = {
      type: A.FETCH_FILMS_SUCCESS,
      filmsData: { data: [1, 2, 3], total: 10 }
    };

    expect(filmsReducer(prevState, action)).toEqual({
      ...prevState,
      loading: false,
      films: action.filmsData
    });
  });

  it('Fetch films failure', () => {
    const prevState = {
      ...initialState,
      loading: true
    };

    const action = {
      type: A.FETCH_FILMS_FAILURE,
      error: 'Error message'
    };

    expect(filmsReducer(prevState, action)).toEqual({
      ...prevState,
      loading: false,
      error: action.error
    });
  });
});
