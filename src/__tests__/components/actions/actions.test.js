import * as actions from '../../../actions';
import constants from '../../../constants';

describe('SET ACTIONS', () => {
  describe('#setSearchTerm()', () => {
    it('should return an item and a type === SET_SEARCH_TERM', () => {
      const payload = { name: 'hello' };
      const expectedAction = {
        type: constants.SET_SEARCH_TERM,
        payload: payload
      }
      expect(actions.setSearchTerm(payload)).toEqual(expectedAction);
    });
  });
})