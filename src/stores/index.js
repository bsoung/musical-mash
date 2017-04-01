import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { songReducer, videoReducer, searchReducer } from '../reducers';

let store = null;

export default {
	configureStore: () => {
		const reducers = combineReducers({
			songs: songReducer,
			videos: videoReducer,
			search: searchReducer
		});

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store;
	},

	currentStore: () => {
		return store;
	}
}