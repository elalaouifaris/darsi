import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MemoryGame from './MemoryGame';

configure({adapter: new Adapter()});
jest.useFakeTimers();

describe('<MemoryGame />', () => {
  const SAMPLE_CONTENT = [
    {
      matching_id: 1,
      front_content: "D",
      back_content: "cat"
    },
    {
      matching_id: 1,
      front_content: "D",
      back_content: 'dog'
    },
    {
      matching_id: 2,
      front_content: "D",
      back_content: "high"
    },
    {
      matching_id: 2,
      front_content: "D",
      back_content: "low"
    }
  ];

  it('Component renders without errors', () => {
    const wrapper = shallow(<MemoryGame content_list={ SAMPLE_CONTENT } />);
    // eslint-disable-next-line no-unused-expressions
    wrapper
  });

  it('Should set the flip_index_1 when flipHandler is called with the corresponding index and first_flip_index is null', () => {
    const wrapper = shallow(<MemoryGame content_list={ SAMPLE_CONTENT } />);
    const flip_index = 1;

    wrapper.instance().flipHandler(flip_index);

    expect(wrapper.state('flip_index_1')).toEqual(flip_index);
  });

  it('Should set the card at the given index flipped state', () => {
    const wrapper = shallow(<MemoryGame content_list={ SAMPLE_CONTENT } />);
    const flip_index = 1;

    wrapper.instance().flipHandler(flip_index);
    
    const cards = wrapper.state("cards_list");
    expect(cards[flip_index].flipped).toEqual(true);
  });

  it('Should set the flip_index_2 when the flipHandler is called with the corresponding index and flip_index_1 is not null', () => {
    const wrapper = shallow(<MemoryGame content_list={ SAMPLE_CONTENT } />);
    const flip_index = 2;
    wrapper.setState({ flip_index_1: 1 });

    wrapper.instance().flipHandler(flip_index);

    expect(wrapper.state('flip_index_2')).toEqual(flip_index);
  });

  it('Should set the show_candidate property to true on the second card flip', () => {
    const wrapper = shallow(<MemoryGame content_list={ SAMPLE_CONTENT } />);
    const flip_index = 3;
    wrapper.setState({ flip_index_1: 1 });

    wrapper.instance().flipHandler(flip_index);

    expect(wrapper.state('show_candidates')).toBeTruthy();
  });

  it('Should set the show_candidate property to false after double flip and timer is up', () => {
    const wrapper = shallow(<MemoryGame content_list={ SAMPLE_CONTENT } />);
    const flip_index = 3;
    wrapper.setState({ flip_index_1: 1 });

    wrapper.instance().flipHandler(flip_index);
    jest.runAllTimers();
    wrapper.update();

    expect(wrapper.state('show_candidates')).toBeFalsy();
  });
});