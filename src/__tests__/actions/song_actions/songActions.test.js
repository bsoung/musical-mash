import * as songActions from '../../../actions/song_actions';
import songConstants from '../../../constants/song_constants';

describe('SONG ACTIONS', () => {
  describe('#setSongDuration()', () => {
    it('should return a number and a type === SET_SONG_DURATION', () => {
      const payload = 345;
      const expectedAction = {
        type: songConstants.SET_SONG_DURATION,
        payload: payload
      }
      expect(songActions.setSongDuration(payload)).toEqual(expectedAction);
    });
  });

  describe('#setSongIndex()', () => {
    it('should return a number and a type === SET_SONG_INDEX', () => {
      const payload = 3;
      const expectedAction = {
        type: songConstants.SET_SONG_INDEX,
        payload: payload
      }
      expect(songActions.setSongIndex(payload)).toEqual(expectedAction);
    });
  });

  describe('#setRandomSong()', () => {
    it('should return an object and a type === SET_RANDOM_SONG', () => {
      const payload = {};
      const expectedAction = {
        type: songConstants.SET_RANDOM_SONG,
        payload: payload
      }
      expect(songActions.setRandomSong(payload)).toEqual(expectedAction);
    });
  });

  describe('#setSongState()', () => {
    it('should return an boolean and a type === SET_SONG_STATE', () => {
      const payload = true;
      const expectedAction = {
        type: songConstants.SET_SONG_STATE,
        payload: payload
      }
      expect(songActions.setSongState(payload)).toEqual(expectedAction);
    });
  });
});



















