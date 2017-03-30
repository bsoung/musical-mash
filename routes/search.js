var express = require('express');
var router = express.Router();
var superagent = require('superagent');

/* GET home page. */
router.get('/:term', function(req, res, next) {
  res.send({
  	message: 'hello'
  })
});

module.exports = router;
