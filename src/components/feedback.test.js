import React from 'react';


import { shallow, mount, render } from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  })
  it('Should provide feedback', () => {
    let feedback = 'Some feedback for you';
    let wrapper = shallow(<Feedback feedback={feedback} />)

    expect(wrapper.contains(feedback)).toEqual(true);
  })
})