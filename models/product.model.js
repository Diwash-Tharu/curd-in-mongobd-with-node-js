// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const ProductSchema = newSchema(
//     {
//         name: {
//             required: [true, "Name is required"],

//         },
//         //price: Number,
//         quantity: { 
//             type: Number,
//             required: [true, "Quantity is required"]
//         },
//         price: {
//             type: Number,
//             required: [true, "Price is required"]
//         },
//         Image  :  {
//             type: String,
//             required: [false, "Image is required"]
//         },
// },

//     {
//         timestamps: true
//     }
        
// );

// const Product = mongoose.model("Product", ProductSchema);

// module.exports = Product;


const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"]
        },
        quantity: { 
            type: Number,
            required: [true, "Quantity is required"]
        },
        price: {
            type: Number,
            required: [true, "Price is required"]
        },
        Image: {
            type: String,
            required: [false, "Image is required"]
        },
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

