import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Menu from './Menu';

configure({adapter: new Adapter()});

describe('<Menu />', () => {
  it('Component renders without errors', () => {
   const wrapper = shallow(<Menu />);
   wrapper
  });
});