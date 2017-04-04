import constants from '../constants';
import _ from 'lodash';

let initialState = {
	searchTerm: null
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case constants.SET_SEARCH_TERM:
			updated.searchTerm = action.payload;

			return updated;

		default:
			return state;
	}
}