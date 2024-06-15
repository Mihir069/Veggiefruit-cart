const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors())
const allProducts = require('./data/products.json');


server.get('/all-products',(req,res)=>{
    res.json(allProducts)
})
server.listen(3000,()=>{
    console.log('Server is running at port 3000')
})