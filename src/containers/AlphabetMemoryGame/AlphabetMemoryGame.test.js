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

  it('Should set the flip_index_1 when flipHandler is called with the corresponding index and first_flip_index is null', () => {
    const wrapper = shallow(<AlphabetMemoryGame />);
    const flip_index = 1;

    wrapper.instance().flipHandler(flip_index);

    expect(wrapper.state('flip_index_1')).toEqual(flip_index);
  });

  it('Should set the card at the given index flipped state', () => {
    const wrapper = shallow(<AlphabetMemoryGame />);
    const flip_index = 1;

    wrapper.instance().flipHandler(flip_index);
    
    const cards = wrapper.state("cards_list");
    expect(cards[flip_index].flipped).toEqual(true);
  });

  it('Should set the flip_index_2 when the flipHandler is called with the corresponding index and flip_index_1 is not null', () => {
    const wrapper = shallow(<AlphabetMemoryGame />);
    const flip_index = 2;
    wrapper.setState({ flip_index_1: 1 });

    wrapper.instance().flipHandler(flip_index);

    expect(wrapper.state('flip_index_2')).toEqual(flip_index);
  });

  it('Should set the show_candidate property to true on the second card flip', () => {
    const wrapper = shallow(<AlphabetMemoryGame />);
    const flip_index = 3;
    wrapper.setState({ flip_index_1: 1 });

    wrapper.instance().flipHandler(flip_index);

    expect(wrapper.state('show_candidates')).toEqual(true);
  });
});