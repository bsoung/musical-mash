import React from 'react';
import { shallow } from 'enzyme';
import ConnectedMusicPlayerContainer, { MusicPlayerContainer } from '../../../components/container/MusicPlayerContainer';

function setup() {
	const props = {};

  const enzymeWrapper = shallow(<MusicPlayerContainer {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('MusicPlayerContainer', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.length).toEqual(1);
    expect(enzymeWrapper.find('div').hasClass('mt3')).toBe(true);
    expect(enzymeWrapper.find('h2').hasClass('m0')).toBe(true);

  });
});
