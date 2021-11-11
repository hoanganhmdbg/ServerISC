const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
	productName: String,
	productImg: Array,
    productSale: Number,
	productPrice: Number,
    productCate: String,
    productSize: Array,
    productSex: String,
    productSold: Number,
	productDes: String,
	productVote: Array,
	productRemain: Number
	}
)

var Product = mongoose.model('product', productSchema);

module.exports = Product;