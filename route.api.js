var express = require('express');
var router = express.Router();
var ArticalModel = require('./models/artical');
var PostModel = require('./models/post');

/* GET posts listing. */

// router.get('/list', function(req, res, next) {
//   res.json({postsList: ['文章1', '文章2', '文章3']});
// });

router.get('/list', function(req, res, next) {
  PostModel.find({}, {}, function (err, posts) {
    if (err) {
      res.json({ success: false });
      return;
    }
    res.json({ success: true, postsList: posts });
  });
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
  post.title = title;
  post.content = content;
  post.save(function (err, doc) {
    res.json({success: true});
  });
});
module.exports = router;