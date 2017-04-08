import videoConstants from '../constants/video_constants';
import searchConstants from '../constants/search_constants';
import _ from 'lodash';

let initialState = {
	allVideos: null,
	player: null,
	currentVideo: null,
	previousVideoIndex: null,
	isVideoPlaying: false
}

export default (state = initialState, action = {}) => {
	let updated = _.merge({}, state);

	switch (action.type) {
		case searchConstants.SEARCH_VIDEOS:
			updated.allVideos = action.payload;

			return updated;

		case videoConstants.SET_VIDEO_PLAYER:
			updated.player = action.payload;

			return updated;

		case videoConstants.SET_RANDOM_VIDEO:
			updated.currentVideo = action.payload;

			return updated;

		case videoConstants.SET_VIDEO_INDEX:
			updated.previousVideoIndex = action.payload;

			return updated;

		case videoConstants.SET_VIDEO_STATE:
			updated.isVideoPlaying = action.payload;

			return updated;

		default:
			return state;
	}
}