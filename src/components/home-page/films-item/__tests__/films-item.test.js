import React from 'react';
import { shallow } from 'enzyme';

import FilmsItem from '../films-item';

describe('Film item', () => {
  const props = {
    name: null,
    posterURL: null
  };

  describe('all data', () => {
    const nextProps = {
      ...props,
      name: 'Some name',
      posterURL: 'https://site.com/image.jpg'
    };

    const wrapper = shallow(<FilmsItem {...nextProps} />);

    it('render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('correct property', () => {
      expect(wrapper.find('h3').text()).toEqual(nextProps.name);
      expect(wrapper.find('img').prop('src')).toEqual(nextProps.posterURL);
    });
  });
});

// TODO: add more tests
