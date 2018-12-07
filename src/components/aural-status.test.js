import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Renders an audible update', () => {
    let testUpdate = "Audible update working";

    let wrapper = shallow(<AuralStatus auralStatus={testUpdate} />);
    expect(wrapper.contains(testUpdate)).toEqual(true);
  });
});

