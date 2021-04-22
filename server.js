const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
// app.use(bodyParser.json());

app.use(cors());

//mongoose

//API routes
app.get('/', function(req, res) {
    res.send("express is here")
})

app.listen(port, function() {
    console.log("express is running");
})