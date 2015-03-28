var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var script = "require(['users/button.js'], function (dom) {var a = new dom();a.init();});";
  res.render('index', { title: 'Express', script: script });
});

module.exports = router;
