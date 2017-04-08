import * as actions from '../../../actions';
import constants from '../../../constants';

describe('VIDEO ACTIONS', () => {
  describe('#setVideoPlayer()', () => {
    it('should return an object and a type === SET_VIDEO_PLAYER', () => {
      const payload = {};
      const expectedAction = {
        type: constants.SET_VIDEO_PLAYER,
        payload: payload
      }
      expect(actions.setVideoPlayer(payload)).toEqual(expectedAction);
    });
  });

  describe('#setRandomVideo()', () => {
    it('should return a object and a type === SET_RANDOM_VIDEO', () => {
      const payload = {};
      const expectedAction = {
        type: constants.SET_RANDOM_VIDEO,
        payload: payload
      }
      expect(actions.setRandomVideo(payload)).toEqual(expectedAction);
    });
  });

  describe('#setVideoIndex()', () => {
    it('should return a number and a type === SET_VIDEO_INDEX', () => {
      const payload = 3;
      const expectedAction = {
        type: constants.SET_VIDEO_INDEX,
        payload: payload
      }
      expect(actions.setVideoIndex(payload)).toEqual(expectedAction);
    });
  });

  describe('#setVideoState()', () => {
    it('should return an boolean and a type === SET_VIDEO_STATE', () => {
      const payload = true;
      const expectedAction = {
        type: constants.SET_VIDEO_STATE,
        payload: payload
      }
      expect(actions.setVideoState(payload)).toEqual(expectedAction);
    });
  });
});

















