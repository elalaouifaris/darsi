import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Backdrop from './Backdrop';

configure({adapter: new Adapter()});

describe('<Backdrop />', () => {
  it('Should render a div', () => {
    const wrapper = shallow(<Backdrop />);
    expect(wrapper.name()).toBe('div');
  })
});
