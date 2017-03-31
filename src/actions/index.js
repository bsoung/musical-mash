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
			getRequest(`/search/${searchTerm}`, null, constants.SEARCH_SONGS)
		);
	}
}