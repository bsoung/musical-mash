import React from 'react';
import { shallow } from 'enzyme';
import ConnectedSearchContainer, { SearchContainer } from '../../../components/container/SearchContainer';

function setup() {
	const props = {};

  const enzymeWrapper = shallow(<SearchContainer {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('MusicPlayerContainer', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    
    console.log(enzymeWrapper.children().props('onMusicVideoSearch'));

    expect(enzymeWrapper.children().props('onMusicVideoSearch')).toBeDefined();
    expect(enzymeWrapper.length).toEqual(1);
    // expect(enzymeWrapper.find('div').hasClass('mt3')).toBe(true);
    // expect(enzymeWrapper.find('h2').hasClass('m0')).toBe(true);

  });
});