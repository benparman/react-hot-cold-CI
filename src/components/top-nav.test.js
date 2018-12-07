import React from 'react';

import { shallow, mount, render } from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav />', () => {
  it('Should render without crashing', () => {
    shallow(<TopNav />);
  });

  it('Should call onNewGame when new game is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const link = wrapper.find('.new');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });

  it('Should call onGenerateAuralUpdate when state-of-game link is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    const link = wrapper.find('.status-link');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});