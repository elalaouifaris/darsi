import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AlphabetTable from './AlphabetTable';
import LetterThumbnail from '../LetterThumbnail/LetterThumbnail';

configure({adapter: new Adapter()});

describe('<AlphabetTable/>', () => {
  const letters = [{
    index: 1,
    isolated_form: "أ",
    reading: "Alif"
  },
  {
    index: 2,
    isolated_form: "ب",
    reading: "Ba'"
  }];

  it('Component renders without errors', () => {
    const wrapper = shallow(<AlphabetTable letters={ letters }/>);
    wrapper
  });

  it('should render a LetterThumbnail for each element in given letters list', () => {
    const wrapper = shallow(<AlphabetTable letters={ letters }/>);
    expect(wrapper.find(LetterThumbnail)).toHaveLength(letters.length)
  });

  it('should render the letter isolated form as LetterThumbnail letter prop', () => {
    const wrapper = shallow(<AlphabetTable letters={ letters }/>);
    expect(wrapper.find(LetterThumbnail).first().props())
      .toHaveProperty("letter", letters[0].isolated_form)
  });

  it('should render the letter reading form as LetterThumbnail reading prop', () => {
    const wrapper = shallow(<AlphabetTable letters={ letters }/>);
    expect(wrapper.find(LetterThumbnail).first().props())
      .toHaveProperty("reading", letters[0].reading)
  });
});
