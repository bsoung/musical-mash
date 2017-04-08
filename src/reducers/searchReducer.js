import constants from '../constants';
import _ from 'lodash';

const initialState = {
	searchTerm: null,
	sameSearchTrigger: 0
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case constants.SET_SEARCH_TERM:
			updated.searchTerm = action.payload;

			return updated;

		case constants.SAME_SEARCH_TRIGGERED:
			updated.sameSearchTrigger++;

			if (updated.sameSearchTrigger > 1) {
				updated.sameSearchTrigger = 0;
			}

			return updated;

		default:
			return state;
	}
}