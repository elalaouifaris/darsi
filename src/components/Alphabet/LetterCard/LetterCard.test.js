import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LetterCard from './LetterCard';
import LetterPositionSVG from '../LetterPositionSVG/LetterPositionSVG';

configure({adapter: new Adapter()});

describe('<LetterCard/>', () => {
  const letter = {
    index: 1,
    isolated_form: "أ",
    reading: "Alif",
    letter_highlight: {
      first_letter: {
        text: "أسد",
        start: 0,
        end: 30
      },
      middle_letter: {
        text: "فـأس",
        start: 25,
        end: 45
      },
      last_letter: {
        text: "سبـأ",
        start: 60,
        end: 80
      },
    },
  }

  it('Component does render without errors', () => {
    const wrapper = shallow(<LetterCard letter={ letter }/>);
    wrapper
  });

  it('Component renders 3 LetterPositionSVG elements', () => {
    const wrapper = shallow(<LetterCard letter={ letter }/>);
    expect(wrapper.find(LetterPositionSVG)).toHaveLength(3);
  })
});
