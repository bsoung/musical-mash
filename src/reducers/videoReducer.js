import constants from '../constants';
import _ from 'lodash';

let initialState = {
	allVideos: null
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case constants.SEARCH_VIDEOS:
			updated.allVideos = action.payload;

			console.log('SEARCH_VIDEOS', updated);

			return updated;

		default:
			return state;
	}
}