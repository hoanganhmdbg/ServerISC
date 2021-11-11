const CategoryModel = require('./category')
const mongoose = require('mongoose')

const getAllCategory = async function(req, res) {
    const categories = await CategoryModel.find()
    return categories
}


module.exports = {
    getAllCategory
}