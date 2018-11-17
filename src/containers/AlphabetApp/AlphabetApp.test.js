/* eslint-disable no-unused-expressions */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AlphabetApp from './AlphabetApp';
import LetterCard from '../../components/Alphabet/LetterCard/LetterCard';

configure({adapter: new Adapter()});

describe('<AlphabetApp/>', () => {
  it('Component renders without errors', () => {
    const wrapper = shallow(<AlphabetApp />);
    wrapper
  });

  it('should have a selected_letter_index state as null when instanciated', () => {
    const wrapper = shallow(<AlphabetApp />);
    expect(wrapper.state().selected_letter_index).toBeNull();
  });

  it('should set state selected_letter_index with selectLetterHandler method', () => {
    const wrapper = shallow(<AlphabetApp />);
    wrapper.instance().selectLetterHandler(1);
    expect(wrapper.state().selected_letter_index).toEqual(1);
  });

  it('should set state selected_letter_index to null with removeSelectionHandler method', () => {
    const wrapper = shallow(<AlphabetApp />);
    wrapper.setState({selected_letter_index: 1});
    wrapper.instance().removeSelectionHandler();
    expect(wrapper.state().selected_letter_index).toBeNull();
  });

  it('should not contain a LetterCard when selected_letter_index is null', () => {
    const wrapper = shallow(<AlphabetApp />);
    expect(wrapper.find(LetterCard)).toHaveLength(0);
  });

  it('should contain a LetterCard when selected_letter_index is not null', () => {
    const wrapper = shallow(<AlphabetApp />);
    wrapper.setState({selected_letter_index: 3})
    expect(wrapper.find(LetterCard)).toHaveLength(1);
  });
});
