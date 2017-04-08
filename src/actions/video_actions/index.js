import videoConstants from '../../constants/video_constants';

export function setVideoPlayer(eventTarget) {
	return {
		type: videoConstants.SET_VIDEO_PLAYER,
		payload: eventTarget
	}
}

export function setVideoIndex(index) {
	return {
		type: videoConstants.SET_VIDEO_INDEX,
		payload: index
	}
}

export function setRandomVideo(video) {
	return {
		type: videoConstants.SET_RANDOM_VIDEO,
		payload: video
	}
}

export function setVideoState(bool) {
	return {
		type: videoConstants.SET_VIDEO_STATE,
		payload: bool
	}
}