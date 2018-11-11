import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WordContainer from './WordContainer';
import LetterPositionSVG from '../../LetterPositionSVG/LetterPositionSVG';
configure({adapter: new Adapter()});

describe('<WordContainer/>', () => {
  const letter = {
    text: "أسد",
    start: 0,
    end: 30
  }

  it('Component render without errors', () => {
    const wrapper = shallow(<WordContainer letter={ letter }/>);
    wrapper
  });

  it('should take letter data and render using LetterPositionSVG', () => {
    const wrapper = shallow(<WordContainer  letter={ letter } />);
    expect(wrapper.find(LetterPositionSVG)).toHaveLength(1);
  });

  it('should render given title in a paragraph', () => {
    const wrapper = shallow(<WordContainer
      letter={ letter } title="Au début"/>);
    expect(wrapper.find('.Title').text()).toEqual("Au début");
  });
});
