import APIManager from './APIManager';

export default {
	getRequest: (path, params, actionType) => {
			// no curly brackets after arrow func auto returns dispatch
		return (dispatch) => 
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
								throw err;
							});
	}

}