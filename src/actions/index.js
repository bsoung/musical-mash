import constants from '../constants';
import { APIManager } from '../utils';

const getRequest = (path, params, actionType) => {
	return (dispatch) => {
		APIManager
			.get(path, params)
			.then(data => {
				const payload = data.response;

				dispatch({
					type: actionType,
					payload: payload,
					params: params
				});

				return data;
			})
			.catch(err => {
				console.error(err.message);
				alert(err.message);
			});
	}
}

export function searchSongs(searchTerm) {
	return (dispatch) => {
		return dispatch(
			getRequest(`/music/${searchTerm}`, null, constants.SEARCH_SONGS)
		);
	}
}

export function searchVideos(searchTerm) {
	return (dispatch) => {
		return dispatch(
			getRequest(`/video/${searchTerm}`, null, constants.SEARCH_VIDEOS)
		);
	}
}

export function setSearchTerm(searchTerm) {
	return {
		type: constants.SET_SEARCH_TERM,
		payload: searchTerm
	}
}

export function setSong(bool) {
	return {
		type: constants.SET_SONG,
		payload: bool
	}
}

export function setVideo(bool) {
	return {
		type: constants.SET_VIDEO,
		payload: bool
	}
}















