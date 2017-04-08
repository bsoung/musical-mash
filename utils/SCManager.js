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
					limit: 50,
					client_id: process.env.SC_CLIENT_ID,
					order: 'hotness'
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