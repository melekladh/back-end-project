const Product = require('../models/productModel'); // Importing the Product model

// Controller function to get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Find all products
        res.status(200).json({ products }); // Respond with the array of products
    } catch (err) {
        console.log(err); // Log any errors
        res.status(500).send("Error Interno del Servidor"); // Respond with 500 status code and error message
    }
};

// Controller function to create a new product
const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body); // Create a new product with request body data
        res.status(200).json(newProduct); // Respond with the newly created product
    } catch (error) {
        res.status(500).json({ msg: "something went wrong" }); // Respond with 500 status code and error message
    }
};

// Controller function to update a product
const updateProduct = async (req, res) => {
    try {
        const productUpdated = await Product.findOneAndUpdate(req.body); // Find and update the product
        res.status(200).json(productUpdated); // Respond with the updated product
    } catch (error) {
        res.status(500).json({ msg: "something went wrong" }); // Respond with 500 status code and error message
    }
};

// Controller function to delete a product
const deleteProduct = async (req, res) => {
    try {
        const productDeleted = await Product.findOneAndDelete(req.body.title); // Find and delete the product by title
        res.status(200).json({ msg: "product deleted", productDeleted }); // Respond with success message and deleted product
    } catch (error) {
        res.status(500).json({ msg: "something went wrong" }); // Respond with 500 status code and error message
    }
};

// Exporting the controller functions
module.exports = { createProduct, deleteProduct, getProducts, updateProduct };
