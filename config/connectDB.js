const mongoose = require("mongoose"); // Importing mongoose for MongoDB connection

// Defining a function to connect to the MongoDB database
const connectDB = () => {
    mongoose.connect(process.env.MONGO) // Connecting to the MongoDB database using the MONGO environment variable
        .then(() => console.log("DB CONNECTED")) // Logging a success message if the connection is successful
        .catch((err) => console.log(err)); // Logging an error message if the connection fails
};

module.exports = connectDB; // Exporting the connectDB function
