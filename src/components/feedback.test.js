import React from 'react';


import { shallow, mount, render } from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  })
})