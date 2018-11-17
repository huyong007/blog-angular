var express = require('express');
var router = express.Router();
var ArticalModel = require('./models/artical');

/* GET posts listing. */

router.get('/list', function(req, res, next) {
  res.json({postsList: ['文章1', '文章2', '文章3']});
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
    res.send('respond with a resource');
  });

  /* Creat creat */
router.post('/create', function (req, res, next) {
  var title = req.body.title;
  var content = req.body.content;
  var post = new PostModel();
  artical.title = title;
  artical.content = content;
  artical.save(function (err, doc) {
    res.json({success: true});
  });
});
module.exports = router;