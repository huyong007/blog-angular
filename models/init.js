// const mongoose = require('mongoose');

// mongoose.connect('mongodb:/localhost:27017/blog');


const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/test3';

mongoose.connect(URL,function(err){
    if(err){
        console.warn('数据库连接失败：'+err);
    }else {
        console.log('数据库成功连接到：'+URL);
    }
});
  