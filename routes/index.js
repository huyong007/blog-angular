var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'myBlog',content:'8:模版引擎' });
});

module.exports = router;