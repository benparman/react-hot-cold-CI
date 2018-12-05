import React from 'react';


import { shallow, mount, render } from 'enzyme';
import GuessList from './game';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList />);
  })
})