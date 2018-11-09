import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from './Modal';
import Backdrop from '../Backdrop/Backdrop';
import { MdClose } from 'react-icons/md';

configure({adapter: new Adapter()});

describe('<Modal/>', () => {
  it('The Modal component has a Backdrop', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.contains(<Backdrop />)).toEqual(true);
  });

  it('The Modal component has a material design close button', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.contains(<MdClose />)).toEqual(true);
  });

  it('The Modal component has a div', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.children().some('div')).toEqual(true);
  });
});
