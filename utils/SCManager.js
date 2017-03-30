var superagent = require('superagent');
var Promise = require("bluebird");

module.exports = {
	search: function(searchTerm) {
		return new Promise(function(resolve, reject) {
			var url = 'https://api.soundcloud.com/tracks?';

			superagent
				.get(url)
				.query({
					q: searchTerm,
					license: 'cc-by-sa',
					client_id: process.env.CLIENT_ID
				})
				.set('Accept', 'application/json')
				.end(function(err, res) {
					if (err) {
						reject(err);
						return;
					}

					resolve(res.body)
				});
			});

		}
}