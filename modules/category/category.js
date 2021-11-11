const mongoose = require('mongoose');

var cateSchema = new mongoose.Schema({
	cateName: String,

})

var Category = mongoose.model('category', cateSchema, );

module.exports = Category;