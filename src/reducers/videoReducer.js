import constants from '../constants';
import _ from 'lodash';

let initialState = {
	allVideos: null,
	videoSet: false
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case constants.SEARCH_VIDEOS:
			updated.allVideos = action.payload;

			return updated;

		case constants.SET_VIDEO:
			updated.videoSet = action.payload;

			console.log('updated video!', updated);

			return updated;

		default:
			return state;
	}
}