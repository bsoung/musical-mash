import React from 'react';
import { shallow } from 'enzyme';
import LandingLayout from '../../../components/layout/LandingLayout';

function setup() {
	const props = {};

  const enzymeWrapper = shallow(<LandingLayout {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('LandingLayout', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.length).toEqual(1);
    expect(enzymeWrapper.find('h3').hasClass('search-title')).toBe(true);
    expect(enzymeWrapper.find('div').hasClass('landing-container')).toBe(true);
  });
});
