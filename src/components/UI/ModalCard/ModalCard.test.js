import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ModalCard from './ModalCard';

configure({adapter: new Adapter()});

describe('<ModalCard />', () => {
  it('Component renders without errors', () => {
   const wrapper = shallow(<ModalCard />);
   wrapper
  });
});