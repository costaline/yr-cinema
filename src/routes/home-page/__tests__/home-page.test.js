import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from '../home-page';
import { Loader } from '~components/shared/loader';

describe('Home page', () => {
  const props = {
    fetchFilms: () => {},
    films: [],
    total: null,
    loading: false,
    error: null,
    location: {}
  };

  it('Loading', () => {
    const nextProps = {
      ...props,
      loading: true
    };

    const wrapper = shallow(<HomePage {...nextProps} />);

    expect(wrapper.contains(<Loader />)).toEqual(true);
  });
});
