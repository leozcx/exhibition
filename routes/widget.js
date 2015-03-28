var express = require('express');
var router = express.Router();
var request = require('request')
var config = require('config');

/* GET users listing. */
router.get('/', function(req, res) {
	var originalUrl = req.originalUrl;
	if(!(/(^\/)|(\:)|(\.js$)/.test(originalUrl)))
		originalUrl = originalUrl + ".js";
	console.log(config.get("widgetUrl") + originalUrl.substring(7))
	request(config.get("widgetUrl") + originalUrl.substring(7), function(error, response, body) {
		if (!error) {
			res.send(body);
		} else {
			console.log(error)
			res.send("error")
		}
	})
});

module.exports = router;
