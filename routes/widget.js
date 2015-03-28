var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config');

/* GET users listing. */
router.get('/', function(req, res) {
	var originalUrl = req.originalUrl;
	if(!(/(^\/)|(\:)|(\.js$)/.test(originalUrl)))
		originalUrl = originalUrl + ".js";
	request(config.get("widgetUrl") + originalUrl.substring(7), function(error, response, body) {
		if (!error) {
			res.send(body);
		} else {
			if(error.code == "ECONNREFUSED") {
				res.status(500).json("Widget server connection refused");
			} else {
				res.status(500).send(error.code);
			}
				
		}
	});
});

module.exports = router;
