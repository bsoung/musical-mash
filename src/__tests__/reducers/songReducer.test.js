import * as actions from '../../actions';
import { songReducer } from '../../reducers';

// TODO: Async actions on reducer
describe('SEARCH REDUCER', () => {
  const INITIAL_STATE = {
      allSongs: null,
      songDurationSeconds: null,
      currentSong: null,
      previousSongIndex: null,
      isSongPlaying: false
    }

  it('should update the song duration when a new track is loaded', () => {
    const duration = 420;
    const expectedReducer = {
      allSongs: null,
      songDurationSeconds: 420,
      currentSong: null,
      previousSongIndex: null,
      isSongPlaying: false
    };

    expect(songReducer(INITIAL_STATE, actions.setSongDuration(duration)))
      .toEqual(expectedReducer);
  });

  it('should update the current song to the current track when the current track is loaded', () => {
    const song = {};
    const expectedReducer = {
      allSongs: null,
      songDurationSeconds: null,
      currentSong: {},
      previousSongIndex: null,
      isSongPlaying: false
    };

    expect(songReducer(INITIAL_STATE, actions.setRandomSong(song)))
      .toEqual(expectedReducer);
  });

  it('should update the current song index (from Allsongs array) when the current track is loaded', () => {
    const song = 3;
    const expectedReducer = {
      allSongs: null,
      songDurationSeconds: null,
      currentSong: null,
      previousSongIndex: 3,
      isSongPlaying: false
    };

    expect(songReducer(INITIAL_STATE, actions.setSongIndex(song)))
      .toEqual(expectedReducer);
  });

  it('should update the current song state when the current track is loaded', () => {
    const isSongPlaying = true;
    const expectedReducer = {
      allSongs: null,
      songDurationSeconds: null,
      currentSong: null,
      previousSongIndex: null,
      isSongPlaying: true
    };

    expect(songReducer(INITIAL_STATE, actions.setSongState(isSongPlaying)))
      .toEqual(expectedReducer);
  });
});
















