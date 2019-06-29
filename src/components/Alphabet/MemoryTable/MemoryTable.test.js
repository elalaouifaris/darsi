import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MemoryTable from './MemoryTable';

configure({adapter: new Adapter()});

describe('<MemoryTable />', () => {
  it('Component renders without errors', () => {
   const wrapper = shallow(<MemoryTable card_list={[]}/>);
   // eslint-disable-next-line no-unused-expressions
   wrapper
  });
});