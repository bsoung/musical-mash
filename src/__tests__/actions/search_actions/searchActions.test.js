import * as searchActions from '../../../actions/search_actions';
import constants from '../../../constants';

describe('SEARCH ACTIONS', () => {
  describe('#setSearchTerm()', () => {
    it('should return a string and a type === SET_SEARCH_TERM', () => {
      const payload = 'pokemon';
      const expectedAction = {
        type: constants.SET_SEARCH_TERM,
        payload: payload
      }
      expect(searchActions.setSearchTerm(payload)).toEqual(expectedAction);
    });
  });

  describe('#sameSearchTriggered()', () => {
    it('should return a type === SAME_SEARCH_TRIGGERED', () => {
      const expectedAction = {
        type: constants.SAME_SEARCH_TRIGGERED
      }
      expect(searchActions.sameSearchTriggered()).toEqual(expectedAction);
    });
  });
});

















