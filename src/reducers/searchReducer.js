import searchConstants from '../constants/search_constants';
import _ from 'lodash';

const initialState = {
	searchTerm: null,
	sameSearchTrigger: 0
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case searchConstants.SET_SEARCH_TERM:
			updated.searchTerm = action.payload;

			return updated;

		case searchConstants.SAME_SEARCH_TRIGGERED:
			updated.sameSearchTrigger++;

			// rotate our same search trigger so we can compare before/after values later
			if (updated.sameSearchTrigger > 1) {
				updated.sameSearchTrigger = 0;
			}

			return updated;

		default:
			return state;
	}
}