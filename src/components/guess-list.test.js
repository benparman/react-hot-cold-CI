import React from 'react';

import { shallow, mount, render } from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]}/>);
  });
  it('Should return a list of guesses', () => {
    let guesses = [1,2,3,4];
    let wrapper = shallow(<GuessList guesses={guesses} />);
    const items = wrapper.find('li');

    console.log(items.debug());

    expect(items.length).toEqual(guesses.length);
    guesses.forEach((value, index) => {
      expect(items.at(index).text()).toEqual(value.toString());
    })
  })
});