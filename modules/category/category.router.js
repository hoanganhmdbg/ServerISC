const express = require('express')
const Router = express.Router()
const CategoryController = require('./category.controller')

Router.get('categories', async (req,res) => {
    const categories = CategoryController.getAllCategory()
    res.send({success : 1, data : categories})
})

module.exports = Router

