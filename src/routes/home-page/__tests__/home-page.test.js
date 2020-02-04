import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

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
    error: null
  };

  describe('Loader', () => {
    const nextProps = {
      ...props,
      loading: true
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={[{ key: 'someKey' }]}>
        <HomePage {...nextProps} />
      </MemoryRouter>
    );

    it('render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('contains', () => {
      expect(wrapper.contains(<Loader />)).toEqual(true);
    });
  });

  describe('Error message', () => {
    const nextProps = {
      ...props,
      error: 'Error message'
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={[{ key: 'someKey' }]}>
        <HomePage {...nextProps} />
      </MemoryRouter>
    );

    it('render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('contains', () => {
      expect(wrapper.contains(<ErrorMessage />)).toEqual(true);
    });
  });

  describe('Films list', () => {
    const nextProps = {
      ...props,
      films: [
        { filmId: 'id1', name: 'name1' },
        { filmId: 'id2', name: 'name2' }
      ]
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={[{ key: 'someKey' }]}>
        <HomePage {...nextProps} />
      </MemoryRouter>
    );

    it('render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('contains', () => {
      expect(wrapper.find(FilmsList)).toHaveLength(1);
    });
  });

  describe('Pagination', () => {
    const nextProps = {
      ...props,
      total: 3
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={[{ key: 'someKey' }]}>
        <HomePage {...nextProps} />
      </MemoryRouter>
    );

    it('render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('contains', () => {
      expect(wrapper.find(Pagination)).toHaveLength(1);
    });
  });
});
