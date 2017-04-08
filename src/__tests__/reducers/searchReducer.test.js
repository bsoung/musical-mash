import * as actions from '../../actions';
import { searchReducer } from '../../reducers';

describe('SEARCH REDUCER', () => {
  const INITIAL_STATE = {
      searchTerm: null,
  		sameSearchTrigger: 0
    }

  it('should update the search term when a new search is initiated', () => {
    const searchTerm = 'pokemon';
    const expectedReducer = { searchTerm: 'pokemon', sameSearchTrigger: 0 };
    expect(searchReducer(INITIAL_STATE, actions.setSearchTerm(searchTerm)))
      .toEqual(expectedReducer);
  });

   it('should update the trigger when the same search is initiated', () => {
    const searchTerm = 'pokemon';
    const expectedReducer = { searchTerm: null, sameSearchTrigger: 1 };
    expect(searchReducer(INITIAL_STATE, actions.sameSearchTriggered()))
      .toEqual(expectedReducer);
  });
});