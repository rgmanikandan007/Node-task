const express = require("express");
const mongoose = require("mongoose");

const app = express();


const uri = 'mongodb://localhost:27017/addTask'; 
mongoose.connect(uri)
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.error('Database connection failed:', err));


app.listen(3002, () => {
    console.log("Server is running on http://localhost:3002")
})