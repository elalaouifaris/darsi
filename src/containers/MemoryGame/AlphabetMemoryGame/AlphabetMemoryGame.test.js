import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AlphabetMemoryGame from './AlphabetMemoryGame';

configure({adapter: new Adapter()});

describe('<AlphabetMemoryGame />', () => {
  it('Component renders without errors', () => {
    const wrapper = shallow(<AlphabetMemoryGame />);
    // eslint-disable-next-line no-unused-expressions
    wrapper
  });
});