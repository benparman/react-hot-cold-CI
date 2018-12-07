import React from 'react';


import { shallow, mount, render } from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  })
  it('Should count how many guesses have been made', () => {
    let guessCount = 5;
    let wrapper = shallow(<GuessCount guessCount={guessCount} />);

    
    expect(wrapper.contains(guessCount)).toEqual(true);
  });
})