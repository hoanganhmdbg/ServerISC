const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
	orderId: Number,
	userId: mongoose.Types.ObjectId,
	orderAddress: String,
	orderList: Array,
	orderTotal: Number,
	orderPaymentMethod: String,
	orderDate: String,
    status: String
	}
)

var Order = mongoose.model('Order', orderSchema, 'order');

module.exports = Order;