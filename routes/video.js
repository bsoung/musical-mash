var express = require('express');
var router = express.Router();
var utils = require('../utils');

/* Video route */
router.get('/:term', function(req, res, next) {
	var term = req.params.term;

	// request youtube search api
	utils.YTManager.search(term)
		.then(function(response) {
			 res.json({
  			confirmation: 'success',
  			response: response
  		})
		})
		.catch(function(err) {
			res.json({
				confirmation: 'fail',
				message: err
			});
		});
});

module.exports = router;
