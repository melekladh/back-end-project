const User = require('../models/userModels'); // Importing the User model
const bcrypt = require('bcrypt'); // Importing bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Importing jwt for token generation

// Controller function as a placeholder
const GetDone = (req, res) => {
    res.send('hello'); // Respond with "hello"
};

// Controller function to handle user registration
const Register = async (req, res) => {
    try {
        const { email, password } = req.body; // Destructure email and password from request body
        const existUser = await User.findOne({ email: email }); // Check if user with provided email already exists
        if (existUser) {
            res.status(400).json({ msg: "email already exists try to login" }); // Respond with 400 status code and message if email exists
        } else {
            const hashPw = await bcrypt.hash(password, 10); // Hash the password using bcrypt
            const myuser = await User.create({ email, password: hashPw }); // Create a new user document in the database
            const token = await jwt.sign({ id: myuser._id }, process.env.jwt_key, { expiresIn: "7D" }); // Generate JWT token for authentication
            res.status(200).json({ "msg": "registered", token }); // Respond with 200 status code and message indicating successful registration along with JWT token
        }
    } catch (error) {
        res.status(500).json({ "msg": "cannot register", error }); // Respond with 500 status code and error message if registration fails
    }
};

// Controller function to handle user login
const Login = async (req, res) => {
    try {
        const { email, password } = req.body; // Destructure email and password from request body
        const existUser = await User.findOne({ email: email }); // Check if user with provided email exists
        if (!existUser) {
            res.status(400).json({ msg: "email doesnt exist !try to register" }); // Respond with 400 status code and message if email doesn't exist
        } else {
            const verifyPassword = await bcrypt.compare(password, existUser.password); // Compare provided password with hashed password stored in the database
            if (!verifyPassword) {
                res.status(400).json({ msg: "incorrect password" }); // Respond with 400 status code and message if password is incorrect
            } else {
                const token = await jwt.sign({ id: existUser._id }, process.env.jwt_key, { expiresIn: "7D" }); // Generate JWT token for authentication
                res.status(200).json({ "msg": "login done", token }); // Respond with 200 status code and message indicating successful login along with JWT token
            }
        }
    } catch (error) {
        res.status(500).json({ "msg": "something went wrong ", error }); // Respond with 500 status code and error message if login fails
    }
};

// Controller function to retrieve user data based on user ID
const getUserData = async (req, res) => {
    try {
        const userdata = await User.findOne({ _id: req.body.userId }); // Find user document in the database by user ID
        res.status(200).json({ msg: "get users", userdata }); // Respond with 200 status code and user data
    } catch (error) {
        res.status(500).json({ "msg": "something went wrong ", error }); // Respond with 500 status code and error message if retrieval fails
    }
};

// Exporting the controller functions
module.exports = { GetDone, Register, Login, getUserData };
