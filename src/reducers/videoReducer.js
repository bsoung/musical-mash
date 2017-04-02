import constants from '../constants';
import _ from 'lodash';

let initialState = {
	allVideos: null,
	sameVideoSearchCount: 0,
	player: null
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case constants.SEARCH_VIDEOS:
			updated.allVideos = action.payload;

			return updated;

		case constants.SET_SAME_VIDEO_COUNT:
			updated.sameVideoSearchCount = action.payload;

			return updated;

		case constants.SET_VIDEO_PLAYER:
			updated.player = action.payload;

			return updated;

		default:
			return state;
	}
}