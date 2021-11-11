const express = require('express')
const Router = express.Router()
const OrderModel = require('./order')

const getAllOrder = async function() {
    const orders = OrderModel.find()
    return orders
}

const getOrderById = async function(id) {
    const order = await OrderModel.findById(id)
    return order
}

const AddOrder = async function() {

}

const deleteOrder = async function(id) {
    const order = OrderModel.findByIdAndDelete(id)
    return order
}
const updateOrder = async function(id, data) {

	const order = await OrderModel.findByIdAndUpdate(id, req.body, function(error) {
		if (error) {
			console.log(error);
		}
	})
	return order
};

module.exports = {
    getAllOrder,
    getOrderById,
    AddOrder,
    deleteOrder,
    updateOrder
}


