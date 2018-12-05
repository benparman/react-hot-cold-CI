import React from 'react';


import { shallow, mount, render } from 'enzyme';
import GuessSection from './info-section';

describe('<GuessSection />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessSection />);
  })
})