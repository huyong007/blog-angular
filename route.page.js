var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'myBlog', content: '15:存储数据' });
});
/* GET posts page*/
router.get('/posts', function (req, res, next) {
    res.render('posts', { title: '创作我的创作'});
});

/* GET create page*/
router.get('/create', function (req, res, next) {
    res.render('create');
});

/* GET list page */
router.get('/list', function(req, res, next) {
    res.render('list', { title: '日志列表'} );
  });
module.exports = router;