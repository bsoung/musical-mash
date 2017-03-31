import constants from '../constants';
import _ from 'lodash';

let initialState = {
	allSongs: null
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case constants.SEARCH_SONGS:
			updated.allSongs = action.payload;
		
			return updated;

		default:
			return state;
	}
}