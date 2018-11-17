import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LetterThumbnail from './LetterThumbnail';

configure({adapter: new Adapter()});

describe('<LetterThumbnail/>', () => {
  it('Component renders without errors', () => {
    const wrapper = shallow(<LetterThumbnail />);
    // eslint-disable-next-line no-unused-expressions
    wrapper
  });

  it('should render the given letter in .CardFront', () => {
    const wrapper = shallow(<LetterThumbnail letter="أ"/>);
    expect(wrapper.find('.CardFront').text()).toEqual("أ")
  });

  it('should render the given reading in .CardBack', () => {
    const wrapper = shallow(<LetterThumbnail reading="Alif"/>);
    expect(wrapper.find('.CardBack div').text()).toEqual("Alif")
  });

  it('should call given clicked function when .Card is clicked', () => {
    const clicked = jest.fn();
    const wrapper = shallow(<LetterThumbnail clicked={ clicked }/>);
    wrapper.find('.CardBack div').simulate('click');
    expect(clicked).toBeCalled();
  });

});
