import * as actions from '../../actions';
import constants from '../../constants';

describe('SONG ACTIONS', () => {
  describe('#setSongDuration()', () => {
    it('should return a number and a type === SET_SONG_DURATION', () => {
      const payload = 345;
      const expectedAction = {
        type: constants.SET_SONG_DURATION,
        payload: payload
      }
      expect(actions.setSongDuration(payload)).toEqual(expectedAction);
    });
  });

  describe('#setSongIndex()', () => {
    it('should return a number and a type === SET_SONG_INDEX', () => {
      const payload = 3;
      const expectedAction = {
        type: constants.SET_SONG_INDEX,
        payload: payload
      }
      expect(actions.setSongIndex(payload)).toEqual(expectedAction);
    });
  });

  describe('#setRandomSong()', () => {
    it('should return an object and a type === SET_RANDOM_SONG', () => {
      const payload = {};
      const expectedAction = {
        type: constants.SET_RANDOM_SONG,
        payload: payload
      }
      expect(actions.setRandomSong(payload)).toEqual(expectedAction);
    });
  });

  describe('#setSongState()', () => {
    it('should return an boolean and a type === SET_SONG_STATE', () => {
      const payload = true;
      const expectedAction = {
        type: constants.SET_SONG_STATE,
        payload: payload
      }
      expect(actions.setSongState(payload)).toEqual(expectedAction);
    });
  });
});

















