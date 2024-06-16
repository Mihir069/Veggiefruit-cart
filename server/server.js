const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json());
server.use(cors())
const allProducts = require('./data/products.json');
const breads = require('./data/bread.json');
const fruits = require('./data/fruits.json');
const meats = require('./data/meat.json');
const vegetables = require('./data/vegetables.json');
const organicVeg = require('./data/organicvegitable.json');
const bestSeller = require('./data/bestseller.json');

server.get('/all-products',(req,res)=>{
    res.json(allProducts)
})

server.get('/breads',(req,res)=>{
    res.json(breads)
})

server.get('/vegetables',(req,res)=>{
    res.json(vegetables)
})

server.get('/fruits',(req,res)=>{
    res.json(fruits)
})

server.get('/meats',(req,res)=>{
    res.json(meats)
})

server.get('/organic-vegetables',(req,res)=>{
    res.json(organicVeg)
})

server.get('/best-seller',(req,res)=>{
    res.json(bestSeller)
})

server.listen(3000,()=>{
    console.log('Server is running at port 3000')
})