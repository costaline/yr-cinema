import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from '../home-page';
import { Loader } from '~components/shared/loader';
import { ErrorMessage } from '~components/shared/error-message';
import { FilmsList } from '~components/home-page/films-list';
import Pagination from '~components/shared/pagination/pagination';

describe('Home Page with...', () => {
  const props = {
    fetchFilms: () => {},
    films: [],
    total: null,
    loading: false,
    error: null,
    location: {}
  };

  describe('Loader', () => {
    const nextProps = {
      ...props,
      loading: true
    };

    const wrapper = shallow(<HomePage {...nextProps} />);

    it('render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('contain', () => {
      expect(wrapper.contains(<Loader />)).toEqual(true);
    });
  });

  describe('Error message', () => {
    const nextProps = {
      ...props,
      error: 'Error message'
    };

    const wrapper = shallow(<HomePage {...nextProps} />);

    it('render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('contain', () => {
      expect(wrapper.contains(<ErrorMessage />)).toEqual(true);
    });
  });

  describe('Films list', () => {
    const nextProps = {
      ...props,
      films: [{ name: 'name1' }, { name: 'name1' }]
    };

    const wrapper = shallow(<HomePage {...nextProps} />);

    it('render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('contain', () => {
      expect(wrapper.find(FilmsList)).toHaveLength(1);
    });
  });

  describe('Pagination', () => {
    const nextProps = {
      ...props,
      total: 3
    };

    const wrapper = shallow(<HomePage {...nextProps} />);

    it('render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('contain', () => {
      expect(wrapper.find(Pagination)).toHaveLength(1);
    });
  });
});
