import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../actions';
import constants from '../../../constants';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
  	const searchWord = 'pokemon';

    nock('localhost:3000/')
      .get(`/music/${searchWord}`)
      .reply(200, {})

    const expectedActions = [
      { type: constants.SEARCH_SONGS },
      { type: constants.SEARCH_SONGS, body: { todos: ['do something']  } }
    ]
    const store = mockStore({ todos: [] })

    return store.dispatch(actions.searchSongs(searchWord))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})