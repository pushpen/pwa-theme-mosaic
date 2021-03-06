import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FourCards from '../FourCards';

describe('Four cards', () => {
  it('should render correctly', () => {
    const mockCategory = [
      {
        slug: 'mock-slug-1',
        id: 1,
        name: 'Some mock name',
        link: 'http://localhost/mock-slug-1',
      },
      {
        slug: 'mock-slug-2',
        id: 2,
        name: 'Some other mock name',
        link: 'http://localhost/mock-slug-2',
      },
      {
        slug: 'mock-slug-3',
        id: 3,
        name: 'Some name',
        link: 'http://localhost/mock-slug-3',
      },
      {
        slug: 'mock-slug-4',
        id: 4,
        name: 'Mock name',
        link: 'http://localhost/mock-slug-4',
      },
    ];
    const output = shallow(<FourCards categoriesList={mockCategory} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
