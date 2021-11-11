const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const fs = require('fs')
require('dotenv').config();
const { addProduct } = require('./modules/product/product.controller')
const AuthRouter = require('./modules/auth/auth.router')
const CategoryRouter = require('./modules/category/category.router')
const ProductRouter = require('./modules/product/product.router')
const OrderRouter = require('./modules/order/order.router')
const path = require('path')
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) return console.log('Mongo err', err);
  console.log("MongoDB connected");
});

app.use(cors())
app.use(express.json())

app.use('/api/auth', AuthRouter)
app.use('/api/products', ProductRouter)
app.use('api/category', CategoryRouter)
//app.use('api/collection', CollectionRouter)
app.use('api/order', OrderRouter)


app.listen(process.env.PORT, (err) => {
  if(err) console.log('Start err' , err)
  console.log('server Started')
})

// const data = JSON.parse(readFileSync('./rapid_api/list_items_by_category_11044356.json'))

// const mappedData = data.data.items.map(item => ({sold : item.sold,
//                                                   stock: item.stock,
//                                                   price_max: item.price_max,
//                                                   item_rating: item.item_rating
//                                                   ,brand : item.brand,
//                                                   category_id: item.category_id,
//                                                   image : item.image,
//                                                   price: item.price,
//                                                   name: item.name,
//                                                   item_id: item.item_id }))

// function putData() {
//   const data = JSON.parse(fs.readFileSync(path.join(__dirname, '/database/products.json')))
//   data.map(item => {
//     const {productName, productImg, productSale, productPrice, productCate, productSize, productSex, productSold, productDes, productVote, productRemain} = item
//     addProduct({productName, productImg, productSale, productPrice, productCate, productSize, productSex, productSold, productDes, productVote, productRemain})
//   })
// }
// putData()

