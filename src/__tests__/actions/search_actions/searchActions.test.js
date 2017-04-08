import * as searchActions from '../../../actions/search_actions';
import searchConstants from '../../../constants/search_constants';

describe('SEARCH ACTIONS', () => {
  describe('#setSearchTerm()', () => {
    it('should return a string and a type === SET_SEARCH_TERM', () => {
      const payload = 'pokemon';
      const expectedAction = {
        type: searchConstants.SET_SEARCH_TERM,
        payload: payload
      }
      expect(searchActions.setSearchTerm(payload)).toEqual(expectedAction);
    });
  });

  describe('#sameSearchTriggered()', () => {
    it('should return a type === SAME_SEARCH_TRIGGERED', () => {
      const expectedAction = {
        type: searchConstants.SAME_SEARCH_TRIGGERED
      }
      expect(searchActions.sameSearchTriggered()).toEqual(expectedAction);
    });
  });
});

















