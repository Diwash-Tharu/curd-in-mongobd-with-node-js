
const express = require('express');
const mogoose = require('mongoose');
const app = express	()
// const products= require('')


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.use(express.json())  // This is the middleware that will parse the request body and convert it to JSON

app.get('/', (req, res) => {
    res.send('Hello World diwash');
  
})  // This is the route that will be called when the user visits the homepage

app.post('/api/products', (req, res) => {
try {
    
    res.send(req.body);
    console/log(req.body);
} 
catch (error) {
    res.status(500).json({message: error.message})    
}
   // res.send('Product created');
})  // This is the route that will be called when the user sends a POST request to /api/products

mogoose.connect("mongodb+srv://diwash:diwash123@diwash.yrbo6ty.mongodb.net/?retryWrites=true&w=majority&appName=Diwash")
.then(() => {
    console.log('Connected to the database');
})  // This is the connection to the database
.catch(() => {
    console.log('Connection failed');
})  // This is the connection to the database   
