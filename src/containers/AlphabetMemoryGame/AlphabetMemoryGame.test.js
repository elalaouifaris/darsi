import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AlphabetMemoryGame from './AlphabetMemoryGame';

configure({adapter: new Adapter()});

describe('<AlphabetMemoryGame />', () => {
  it('Component renders without errors', () => {
    const wrapper = shallow(<AlphabetMemoryGame />);
    wrapper
  });

  it('Should set the flip_index when flipHandler is called with the corresponding index and first_flip_index is null', () => {
    const wrapper = shallow(<AlphabetMemoryGame />);
    const flip_index = 1;
    wrapper.instance().flipHandler(flip_index);
    expect(wrapper.state('flip_index')).toEqual(flip_index);
  });
});