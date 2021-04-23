const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose")
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
// app.use(bodyParser.json()); --old will give you a depreciation warning

app.use(cors());

//mongoose
mongoose.connect("mongodb+srv://catalina-admin:fliaJUchyWudg52g@cluster0.xttdr.mongodb.net/moviesDB?retryWrites=true&w=majority")

// data schema and model
//API routes
//test to see if server is running
app.get('/', function(req, res) {
    res.send("express is here")
})

app.listen(port, function() {
    console.log("express is running");
})