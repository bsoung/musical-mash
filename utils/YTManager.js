var superagent = require('superagent');
var Promise = require("bluebird");

module.exports = {
  search: function(searchTerm) {
    return new Promise(function(resolve, reject) {
      var url = 'https://www.googleapis.com/youtube/v3/search';

      superagent
        .get(url)
        .query({
          q: searchTerm,
          part: 'snippet',
          type: 'video',
          key: process.env.YT_API_KEY
        })
        .set('Accept', 'application/json')
        .end(function(err, res) {
          if (err) {
            reject(err);
            return;
          }

          var parsedData = JSON.parse(res.text);

          resolve(parsedData.items)
        });
      });

    }
}


