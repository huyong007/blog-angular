var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res, next) {
  res.render('posts', { title: '创作我的创作' });
});
  
module.exports = router;
   