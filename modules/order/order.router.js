const OrderController = require('./order.controller')
const express = require('express')
const Router = express.Router()
const { isAuth } = require('../../middleware/isAuth')

Router.get('/', isAuth,async (req,res) => {
    try {
        const order = await OrderController.getAllOrder()
        res.send({success : 1, data : order})
    }catch(err) {
        res.status(500).send({success : 1, message : err.message})
    }
})

Router.get(':/id', isAuth,  async (req,res) => {
    try {
        const { id } = req.params
        const order = await OrderController.getOrderById(id)
        res.send({success : 1, data : order})
    }catch(err) {
        res.status(500).send({success : 1, message : err.message})
    }
})

module.exports = Router