var express = require('express');
var marked = require('marked');
var PostModel = require('./models/post');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'myBlog', content: '15:存储数据' });
});
/* GET posts page*/
router.get('/posts', function (req, res, next) {
    res.render('posts', { title: '创作我的创作' });
});

/* GET create page*/
router.get('/create', function (req, res, next) {
    res.render('create');
});

/* GET list page */
router.get('/list', function (req, res, next) {
    res.render('list', { title: '日志列表' });
});

/* GET posts show page. */
router.get('/posts/show', function (req, res, next) {
    var id = req.query.id;

    PostModel.findOne({ _id: id }, function (err, post) {
        post.content = marked(post.content);
        res.render('show', { post });
    });
});

/* GET posts edit page. */
router.get('/posts/edit', function (req, res, next) {
    var id = req.query.id;
    res.render('edit', { id });
});

/* GET posts edit page. */
router.get('/function', function (req, res, next) {
    res.render('function');
});


module.exports = router;