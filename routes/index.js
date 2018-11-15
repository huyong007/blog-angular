var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'myBlog',content:'12:路由归类' });
});

module.exports = router;
