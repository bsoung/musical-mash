import React from 'react';
import { shallow } from 'enzyme';
import ConnectedVideoContainer, { VideoContainer } from '../../../components/container/VideoContainer';
import Song from '../../mocks/Song.json';
import Video from '../../mocks/Video.json';

function setup() {

  // create dummy props from what our redux state *would* contain when app is running
	const props = {
    songs: {
      currentSong: Song
    },
    videos: {
      currentVideo: Video
    }
  };

  const enzymeWrapper = shallow(<VideoContainer {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('SongContainer', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.length).toEqual(1);
  });
});