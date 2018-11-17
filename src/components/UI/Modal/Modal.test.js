import React from 'react';
import { configure, shallow, mount } from 'enzyme';
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

  it('The Modal component has a .Modal node containing 2 children close button and content', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find('.Modal').children()).toHaveLength(2);
  });

  it('The Modal component passes children in the .Modal container on top of the button div', () => {
    const modal_with_children = (
      <Modal>
        <div></div>
        <div></div>
        <div></div>
      </Modal>
    );
    const wrapper = shallow(modal_with_children);
    expect(wrapper.find('.ModalContent').children()).toHaveLength(3);
  });

  it('When the close button is clicked the passed cancel function is called once', () => {
    const canceled = jest.fn();
    const wrapper = mount(<Modal cancel={ canceled }/>);
    wrapper.find('.ModalCloseButton').first().simulate('click');
    expect(canceled).toBeCalled();
  });
});
