import constants from '../../constants';

export function setVideoPlayer(eventTarget) {
	return {
		type: constants.SET_VIDEO_PLAYER,
		payload: eventTarget
	}
}

export function setVideoIndex(index) {
	return {
		type: constants.SET_VIDEO_INDEX,
		payload: index
	}
}

export function setRandomVideo(video) {
	return {
		type: constants.SET_RANDOM_VIDEO,
		payload: video
	}
}

export function setVideoState(bool) {
	return {
		type: constants.SET_VIDEO_STATE,
		payload: bool
	}
}