import React from 'react';
import { IFilmInfo } from '~store/film-info/types';

interface IProps {
  info: IFilmInfo;
}

declare const FilmInfo: React.SFC<IProps>;

export default FilmInfo;
