import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MemoryCard from './MemoryCard';

configure({adapter: new Adapter()});

describe('<MemoryCard />', () => {
  it('Component renders without errors', () => {
    const card_data = {
      front_content: "Front",
      back_content: "Back",
      flipped: false,
      pinned: false
    }
    const wrapper = shallow(<MemoryCard card_data={ card_data } />);
    // eslint-disable-next-line no-unused-expressions
    wrapper
  });
});