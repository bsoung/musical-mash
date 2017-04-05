import constants from '../constants';
import _ from 'lodash';

let initialState = {
	searchTerm: null,
	newTermSearched: 0
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case constants.SET_SEARCH_TERM:
			updated.searchTerm = action.payload;

			return updated;

		case constants.NEW_MEDIA_SEARCHED:
			updated.newTermSearched++;

			if (updated.newTermSearched > 1) {
				updated.newTermSearched = 0;
			}

			return updated;

		default:
			return state;
	}
}