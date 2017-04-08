import * as actions from '../../actions';
import { videoReducer } from '../../reducers';

// TODO: Async actions on reducer
describe('SEARCH REDUCER', () => {
  const INITIAL_STATE = {
			allVideos: null,
			player: null,
			currentVideo: null,
			previousVideoIndex: null,
			isVideoPlaying: false
		}

  it('should create the video player when a new track is loaded', () => {
    const player = {};
    const expectedReducer = {
			allVideos: null,
			player: {},
			currentVideo: null,
			previousVideoIndex: null,
			isVideoPlaying: false
		}

    expect(videoReducer(INITIAL_STATE, actions.setVideoPlayer(player)))
      .toEqual(expectedReducer);
  });

  it('should update the current video when a track is loaded', () => {
    const video = {};
    const expectedReducer = {
			allVideos: null,
			player: null,
			currentVideo: {},
			previousVideoIndex: null,
			isVideoPlaying: false
		}

    expect(videoReducer(INITIAL_STATE, actions.setRandomVideo(video)))
      .toEqual(expectedReducer);
  });

  it('should update the current video index when a track is loaded', () => {
    const video = 4;
    const expectedReducer = {
			allVideos: null,
			player: null,
			currentVideo: null,
			previousVideoIndex: 4,
			isVideoPlaying: false
		}

    expect(videoReducer(INITIAL_STATE, actions.setVideoIndex(video)))
      .toEqual(expectedReducer);
  });

  it('should update the current video state when a track is loaded', () => {
    const isVideoPlaying = true;
    const expectedReducer = {
			allVideos: null,
			player: null,
			currentVideo: null,
			previousVideoIndex: null,
			isVideoPlaying: true
		}

    expect(videoReducer(INITIAL_STATE, actions.setVideoState(isVideoPlaying)))
      .toEqual(expectedReducer);
  });
});














