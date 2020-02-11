import { FETCH_FILM_INFO } from './action-types';

export interface IFilmInfo {
  filmId: string;
  name: string;
  year: number;
  posterURL: string;
  slogan: string;
  country: Array<string>;
  description: string;
  timestamp: Date;
}

export interface IFilmInfoState {
  isRequest: boolean;
  filmInfo: IFilmInfo;
  error: string | null;
}

interface IFetchFilmInfoStartAction {
  type: typeof FETCH_FILM_INFO.START;
}

interface IFetchFilmInfoSuccessAction {
  type: typeof FETCH_FILM_INFO.SUCCESS;
  data: IFilmInfo;
}

interface IFetchFilmInfoFailureAction {
  type: typeof FETCH_FILM_INFO.FAILURE;
  error: string;
}

export type FetchFilmInfoActionTypes =
  | IFetchFilmInfoStartAction
  | IFetchFilmInfoSuccessAction
  | IFetchFilmInfoFailureAction;
