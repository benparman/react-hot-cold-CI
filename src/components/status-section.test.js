import React from 'react';


import { shallow, mount, render } from 'enzyme';
import StatusSection from './status-section';

describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection />);
  })
})