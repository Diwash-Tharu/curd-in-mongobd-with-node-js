
const express = require('express');
const mogoose = require('mongoose');

const Product = require('./models/product.model.js');
const app = express	()


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.use(express.json())  // This is the middleware that will parse the request body and convert it to JSON

app.get('/', (req, res) => {
    res.send('Hello World diwash');
  
})  // This is the route that will be called when the user visits the homepage

app.get('/api/products', async(req, res) => 
    {
        try {
            const products = await Product.find();
            res.status(200).json({products});
        } 
        catch (error) {
            res.status(500).json({message: error.message})    
        }
    }
)

app.post('/api/products', async(req, res) => {
try {
    
    const product = await Product.create(req.body);
    res.status(200).json({product});
} 
catch (error) {
    res.status(500).json({message: error.message})    
}
   // res.send('Product created');
})  // This is the route that will be called when the user sends a POST request to /api/products

app.get('/api/products/:id', async(req, res) => {

    try {
        const  {id} = req.params;
         const product =await Product.findById(id);
      
        res.status(200).json({product});

       }
    catch (error) {
        res.status(500).json({message: error.message})    
    }})

mogoose.connect("mongodb+srv://diwash:diwash123@diwash.yrbo6ty.mongodb.net/?retryWrites=true&w=majority&appName=Diwash")
.then(() => {
    console.log('Connected to the database');
})  // This is the connection to the database
.catch(() => {
    console.log('Connection failed');
})  // This is the connection to the database   


// update the [roduct by id]
app.put ('/api/product/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate (id, req.body);
        if(!product)
            {
                return res.status(400).json({message: 'Product not found'});
            }
            const updateProduct  =await Product.findById(id);
            res.status(200).json({updateProduct});
    }

    catch (error) {
        res.status(500).json({message: error.message})    
    }
})

// for deleting the code of the product

app.delete('/api/productdelet/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product= await Product.findByIdAndDelete(id);

        if(!product)
        {
            return res.status(404).json({message: 'Product not found'});
        }
        res.status(200).json({message: 'Product deleted'});
    }
    catch{
        res.status(500).json({message: error.message})  
    }
}

)