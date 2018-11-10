import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LetterPositionSVG from './LetterPositionSVG';

configure({adapter: new Adapter()});

describe('<LetterPositionSVG/> managing right to left text in left to right svg', () => {
  it('The given text prop is rendered in a clipPath text child', () => {
    const wrapper = shallow(<LetterPositionSVG text="My test string" />);
    const clipPath_text = wrapper.find('clipPath').children().first().text();
    expect(clipPath_text).toEqual('My test string');
  });

  it('The color section starts @ 0 when start is 50% and end 100%', () => {
    const wrapper = shallow(<LetterPositionSVG start="50" end="100" />);
    const color_node_props = wrapper.find('.Color').props();
    expect(color_node_props).toHaveProperty('x', 0);
  });

  it('The color section starts @ 200 when start is 0% and width 50%', () => {
    const wrapper = shallow(<LetterPositionSVG start="0" end="50" />);
    const color_node_props = wrapper.find('.Color').props();
    expect(color_node_props).toHaveProperty('x', 200);
  });

  it('The color section starts @ 400 when start is 0% and end 0%', () => {
    const wrapper = shallow(<LetterPositionSVG start="0" end="0" />);
    const color_node_props = wrapper.find('.Color').props();
    expect(color_node_props).toHaveProperty('x', 400);
  });

  it('The color section has a width of 400px when start is 0% and end 100%', () => {
    const wrapper = shallow(<LetterPositionSVG start="0" end="100" />);
    const color_node_props = wrapper.find('.Color').props();
    expect(color_node_props).toHaveProperty('width', 400);
  });

  it('The color section has a width of 200px when start is 0% and end 50%', () => {
    const wrapper = shallow(<LetterPositionSVG start="0" end="50" />);
    const color_node_props = wrapper.find('.Color').props();
    expect(color_node_props).toHaveProperty('width', 200);
  });

  it('The color section has a width of 0px when start is 0% and end 0%', () => {
    const wrapper = shallow(<LetterPositionSVG start="0" end="0" />);
    const color_node_props = wrapper.find('.Color').props();
    expect(color_node_props).toHaveProperty('width', 0);
  });

});
