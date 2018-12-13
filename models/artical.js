var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticalSchema = new Schema({
    title: String,
    content: String
});
   
var ArticalModel = mongoose.model('Artical', ArticalSchema);

module.exports = ArticalModel;