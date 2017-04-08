import React from 'react';
import { shallow } from 'enzyme';
import ConnectedSongContainer, { SongContainer } from '../../../components/container/SongContainer';
import Song from '../../mocks/Song.json';

function setup() {
	const props = {
    songs: {
      currentSong: Song
    }
  };

  const enzymeWrapper = shallow(<SongContainer {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('SongContainer', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    
    // console.log(enzymeWrapper);
    console.log(ConnectedSongContainer, "conencted component");

    // expect(enzymeWrapper.children().props('onMusicVideoSearch')).toBeDefined();
    expect(enzymeWrapper.length).toEqual(1);
    
    // expect(enzymeWrapper.find('div').hasClass('mt3')).toBe(true);
    // expect(enzymeWrapper.find('h2').hasClass('m0')).toBe(true);

  });
});