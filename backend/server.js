const express = require("express");
const cors = require ("cors");
const dotenv = require("dotenv");//to load the port value from an env file
const connectDB = require("./config/db");//import the database connection function
const userRoutes = require("./routes/userRoutes");//import user routes

const app = express();//initialize express app
app.use(express.json());// lets ensure that the server is able to work with json data
app.use(cors());//to communicate with react server

dotenv.config();//load environment variables from .env file

console.log(process.env.PORT);//to check if the port is being loaded correctly

const PORT = process.env.PORT || 3000;//set the port to 3000 or the one specified in .env file

//Connect to MongoDb
connectDB();

app.get("/", (req,res) => {//basic route to test the server
    res.send("Welcome to Walmart API!");
});

//API Routes
app.use("/api/users", userRoutes);//use user routes for /api/users endpoint

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});