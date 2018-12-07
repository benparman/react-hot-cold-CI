import React from 'react';


import { shallow, mount, render } from 'enzyme';
import InfoSection from './info-section';

describe('<InfoSection />', () => {
  it('Should render without crashing', () => {
    shallow(<InfoSection />);
  })
})