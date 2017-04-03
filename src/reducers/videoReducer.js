import constants from '../constants';
import _ from 'lodash';

let initialState = {
	allVideos: null,
	player: null,
	previousVideoIndex: null
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case constants.SEARCH_VIDEOS:
			updated.allVideos = action.payload;

			return updated;

		case constants.SET_VIDEO_PLAYER:
			updated.player = action.payload;

			return updated;

		case constants.SET_PREVIOUS_INDEX:
			updated.previousVideoIndex = action.payload;

			return updated;

		default:
			return state;
	}
}