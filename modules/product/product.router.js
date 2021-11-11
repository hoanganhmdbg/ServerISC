const express = require('express')
const Router = express.Router()
const ProductController = require('./product.controller')
const { isAuth } = require('../../middleware/isAuth')

Router.get('/', async (req, res) => {
    try {
        console.log('comehere');
        const products = await ProductController.getAllProduct()
        res.send({success : 1, data : products})
    }catch(err) {
        res.status(500).send({success : 0, message : err.message})
    }
    
})

Router.get('/:id', async (req, res) => {
    try{
        const { id } = req.params
        const product = await ProductController.getProductById(id)
        res.send({success : 1, data : product})
    }catch(err) {
        res.status(500).send({success : 0, message : err.message})
    }
   
})

Router.post('/', isAuth,async (req,res) => {
    try{
        const { data }  = req.body
        const product = await ProductController.addProduct(data)
        res.send({successs :1 , data : product})
    }catch(err) {
        res.status(500).send({success : 0, message : err.message})
    }
})

Router.delete('/:id' , isAuth,async (req,res) => {
    try{
        const { id } = req.params
        const product = await ProductController.deleteProduct(id)
        res.send({success : 1, data : product})
        
    }catch(err) {
        res.status(500).send({success : 0, message : err.message})
    }
})

Router.put('/review/:id', isAuth, async (req, res) => {
    try{
        const { id } = req.params
        const { data } = req.body
        const product = await ProductController.reviewProduct(id,data)
        res.send({success : 1, data : product})
    }catch(err) {
        res.status(500).send({success : 0, message : err.message})
    }
})



module.exports = Router