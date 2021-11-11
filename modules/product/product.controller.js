const ProductModel = require('./product')
const mongoose = require('mongoose')

const getAllProduct = async function() {
    const products = await ProductModel.find()
    return products
}

const getProductById = async function(id) {
    const product = await ProductModel.findById(id)
    return product
}

const addProduct = async function({productName, productImg, productSale, productPrice, productCate, productSize, productSex, productSold, productDes, productVote, productRemain}) {
    const product = await ProductModel.create({productName, productImg, productSale, productPrice, productCate, productSize, productSex, productSold, productDes, productVote, productRemain})
    return product
}

const updateproduct = async function(id) {
    
}

const reviewProduct = async function(id, data) {
    const product = ProductModel.findByIdAndUpdate(id,
                        {$push: {productVote: data}},
                        function(err) {

                        })
    return product
}

const deleteProduct = async function (id) {
    const product = ProductModel.findByIdAndDelete(id)
    return product
}

module.exports = {
    getAllProduct,
    getProductById,
    addProduct,
    updateproduct,
    reviewProduct,
    deleteProduct
}