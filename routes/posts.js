var express = require('express');
var router = express.Router();

/* GET posts listing. */
let postsList = ['文章1', '文章2', '文章3']
router.get('/', function(req, res, next) {
  res.render('posts', { title: '创作我的创作',postsList });
});
  
module.exports = router;
   