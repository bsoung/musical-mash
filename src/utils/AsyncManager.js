import APIManager from './APIManager';

export default {
	getRequest: (path, params, actionType) => {
		// no curly brackets after arrow func auto returns dispatch
		return (dispatch) => 
						APIManager
							.get(path, params)
							.then(data => {
								let payload = null;

								if (data === null) {
									payload = [];
								} else {
									payload = data.response;
								}

								dispatch({
									type: actionType,
									payload: payload,
									params: params
								});

								return data !== null ? data.response : data;
							})
							.catch(err => {
								console.error(err.message);
								throw err;
							});
	}

}